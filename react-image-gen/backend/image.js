import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function generateImage(prompt, options) {
  const input = {
    prompt,
    aspect_ratio: options.aspect_ratio || "1:1",
    output_format: options.format || "webp",
    output_quality: options.quality || 80,
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
}
// const output = await replicate.run("black-forest-labs/flux-schnell", {
//   input,
// }); // tested model, but not used in the app
// const outputStream = output[0];
// To write the file to disk:
// import { writeFile } from "node:fs/promises";
// fs.writeFile("my-image.png", output);
