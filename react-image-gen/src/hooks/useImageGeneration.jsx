import { useActionState, useEffect, useState } from "react";
import { imageService } from "../services/imageService";
import { useAuthContext } from "../store/auth/authContext";

export function useImageGeneration() {
  const { token } = useAuthContext();
  const [remainingImages, setRemainingImages] = useState(5);

  useEffect(() => {
    async function fetchRemainingCount() {
      try {
        const response = await fetch(
          "http://localhost:5000/images/remaining-count",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setRemainingImages(data.remainingCount);
        }
      } catch (error) {
        console.error("Failed to fetch remaining images count", error);
      }
    }

    if (token) {
      fetchRemainingCount();
    }
  }, [token, remainingImages]);

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
      const { imageUrl, remainingCount } = await imageService.generateImage(
        prompt,
        options,
        token
      );

      setRemainingImages(remainingCount);

      return {
        result: "success",
        imageUrl,
        prompt,
        format: options.format, //Save format for download
      };
    } catch (error) {
      if (error.message.includes("limit reached")) {
        setRemainingImages(0);
      }
      return { result: "error", message: error.message };
    }
  }

  const [formState, action, isPending] = useActionState(submitAction, {
    result: null,
  });

  return {
    formState,
    action,
    isPending,
    remainingImages,
    hasReachedLimit: remainingImages <= 0,
  };
}
