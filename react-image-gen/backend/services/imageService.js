import Replicate from "replicate";
import config from "../config/env.js";

const replicate = new Replicate({
  auth: config.replicateApiToken,
});

export const generateImage = async (prompt, options) => {
  const input = {
    prompt,
    aspect_ratio: options.aspect_ratio || "1:1",
    output_format: options.format || "webp",
    output_quality: +options.quality || 80,
    safety_tolerance: 2,
    prompt_upsampling: true,
  };

  const output = await replicate.run("black-forest-labs/flux-1.1-pro", {
    input,
  });

  const imageBlob = await output.blob();
  const imageBuffer = await imageBlob.arrayBuffer();
  const image = Buffer.from(imageBuffer);

  return { image, format: imageBlob.type };
};
