import { useActionState } from "react";
import Form from "./Form";
import Input from "./Input";
import InputContainer from "./InputContainer";
import Label from "./Label";
import { useAuthContext } from "../store/auth-context";

async function sendImageRequest(prompt, options, authToken) {
  const response = await fetch("http://localhost:5000/images/generate-image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ prompt, options }),
  });
  if (!response.ok) {
    throw new Error("Failed to generate image, check your prompt");
  }
  const imageBlob = await response.blob();
  return URL.createObjectURL(imageBlob);
}

function ImageGeneration() {
  const { token } = useAuthContext();
  async function submitAction(_, formData) {
    const prompt = formData.get("prompt");
    const quality = formData.get("quality");
    const aspectRatio = formData.get("aspectRatio");
    const format = formData.get("format");
    const options = {
      quality: parseInt(quality),
      aspect_ratio: aspectRatio,
      format: format,
    };

    try {
      const imageUrl = await sendImageRequest(prompt, options, token);
      return { result: "success", imageUrl, prompt };
    } catch (error) {
      return { result: "error", message: error.message };
    }
  }

  const [formState, action, isPending] = useActionState(submitAction, {
    result: null,
  });

  return (
    <div className="flex max-w-[70rem] mx-auto items-start gap-4">
      <Form
        action={action}
        className="flex flex-col w-[25rem] justify-between gap-8"
      >
        <div className="flex flex-col gap-4">
          <InputContainer>
            <Label htmlFor="prompt">Image Prompt</Label>
            <Input type="text" id="prompt" name="prompt" isTextArea />
          </InputContainer>
          <div className="flex gap-5">
            <InputContainer className="w-full">
              <Label htmlFor="quality">Quality</Label>
              <Input
                type="number"
                id="quality"
                name="quality"
                min="1"
                max="100"
                step="1.0"
                defaultValue="80"
                className="w-[4rem]"
              />
            </InputContainer>
            <InputContainer className="w-full">
              <Label htmlFor="aspectRatio">Aspect Ratio</Label>
              <select
                id="aspectRatio"
                name="aspectRatio"
                defaultValue="1:1"
                className="p-[0.6rem] rounded-sm w-[6rem]"
              >
                <option value="1:1">1:1</option>
                <option value="4:3">4:3</option>
                <option value="16:9">16:9</option>
              </select>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="format">Format</Label>
              <select
                id="format"
                name="format"
                defaultValue="png"
                className="p-[0.6rem] rounded-sm w-[5rem]"
              >
                <option value="webp">WEBP</option>
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
              </select>
            </InputContainer>
          </div>
        </div>
        <p className="flex justify-end">
          <button
            disabled={isPending}
            className="bg-sky-400 text-black rounded-md py-3 hover:bg-sky-500 transition-colors duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed disabled:text-stone-600"
          >
            {isPending ? "Generating..." : "Generate"}
          </button>
        </p>
      </Form>
      <div className="h-[25rem] flex-1 flex justify-center items-center">
        {!formState.result && (
          <p className="text-stone-400 p-8 font-mono">
            Press "Generate" to generate an image based on your prompt
          </p>
        )}
        {formState.result === "success" && (
          <img
            src={formState.imageUrl}
            alt={formState.prompt}
            className="h-[25rem] shadow-2xl rounded-md"
          />
        )}
        {formState.result === "error" && (
          <p className="text-red-500 p-8 font-mono">
            Error: {formState.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default ImageGeneration;
