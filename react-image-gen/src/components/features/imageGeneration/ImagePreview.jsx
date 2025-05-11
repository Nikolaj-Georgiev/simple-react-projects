import { useEffect } from "react";
import { imageService } from "../../../services/imageService";
import Button from "../../ui/Button";

function ImagePreview({ formState }) {
  // Cleanup blob URL when component unmounts or URL changes
  useEffect(() => {
    return () => {
      if (formState.result === "success" && formState.imageUrl) {
        imageService.revokeImageUrl(formState.imageUrl);
      }
    };
  }, [formState.imageUrl, formState.result]);

  function downloadImage() {
    if (formState.result !== "success") return;

    const link = document.createElement("a");
    link.href = formState.imageUrl;
    link.download = `image-${Date.now()}.${formState.format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="h-[25rem] flex-1 flex flex-col justify-center items-center">
      {!formState.result && (
        <p className="text-stone-400 p-8 font-mono">
          Press "Generate" to generate an image based on your prompt
        </p>
      )}

      {formState.result === "success" && (
        <>
          <img
            src={formState.imageUrl}
            alt={formState.prompt || "Generated image"}
            className="max-h-[25rem] w-auto md:max-w-full object-contain shadow-2xl rounded-md"
          />
          <Button
            onClick={downloadImage}
            className="mt-4 bg-green-500 text-white hover:bg-green-600"
          >
            Download Image
          </Button>
        </>
      )}

      {formState.result === "error" && (
        <p className="text-red-500 p-8 font-mono">Error: {formState.message}</p>
      )}
    </div>
  );
}

export default ImagePreview;
