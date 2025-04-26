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

  // To access the file URL:
  console.log(output); //=> "http://example.com"

  // To write the file to disk:
  // fs.writeFile("my-image.png", output);
}
