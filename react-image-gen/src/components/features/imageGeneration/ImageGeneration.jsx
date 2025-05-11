import { useImageGeneration } from "../../../hooks/useImageGeneration";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import InputContainer from "../../ui/InputContainer";
import Label from "../../ui/Label";
import Button from "../../ui/Button";
import ImagePreview from "./ImagePreview";

function ImageGeneration() {
  const { formState, action, isPending, remainingImages, hasReachedLimit } =
    useImageGeneration();

  return (
    <div className="flex flex-col md:flex-row max-w-[70rem] mx-auto items-start gap-8 md:gap-4 p-4 md:p-0">
      <Form
        action={action}
        className="flex flex-col w-full md:w-[25rem] justify-between gap-8"
      >
        <div className="flex flex-col gap-4">
          <p className="text-stone-300">
            {"Remaining images: "}
            <span className="font-bold">{remainingImages}</span>/5
          </p>

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
                className="flex flex-wrap gap-5 p-[0.6rem] rounded-sm w-[4rem] bg-stone-800"
              />
            </InputContainer>

            <InputContainer className="w-full">
              <Label htmlFor="aspectRatio">Aspect Ratio</Label>
              <select
                id="aspectRatio"
                name="aspectRatio"
                defaultValue="1:1"
                className="p-[0.6rem] rounded-sm w-[4rem] bg-stone-800"
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
                className="p-[0.6rem] rounded-sm w-[5rem] bg-stone-800"
              >
                <option value="webp">WEBP</option>
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
              </select>
            </InputContainer>
          </div>
        </div>

        <div className="flex justify-end">
          <Button disabled={isPending || hasReachedLimit}>
            {isPending ? "Generating..." : "Generate"}
            {hasReachedLimit && !isPending ? " (Limit reached)" : ""}
          </Button>
        </div>
      </Form>

      <ImagePreview formState={formState} />
    </div>
  );
}

export default ImageGeneration;
