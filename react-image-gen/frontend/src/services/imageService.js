import { fetchWrapper } from "./api";

const DEFAULT_IMAGE_OPTIONS = {
  aspect_ratio: "1:1",
  format: "webp",
  quality: 80,
};

export const imageService = {
  async generateImage(prompt, options = {}, token) {
    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      throw new Error("Invalid prompt provided");
    }

    const mergedOptions = { ...DEFAULT_IMAGE_OPTIONS, ...options };

    try {
      const { data: blob, remainingCount } = await fetchWrapper(
        "/images/generate-image",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: prompt.trim(),
            options: mergedOptions,
          }),
        }
      );

      return {
        imageUrl: this._createImageUrl(blob),
        remainingCount,
      };
    } catch (error) {
      console.error("Image generation failed:", error);
      throw new Error(`Image generation failed: ${error.message}`);
    }
  },

  _createImageUrl(blob) {
    if (!(blob instanceof Blob)) {
      throw new Error("Invalid image blob received");
    }

    return URL.createObjectURL(blob);
  },

  revokeImageUrl(url) {
    if (typeof url === "string" && url.startsWith("blob:")) {
      URL.revokeObjectURL(url);
    }
  },
};
