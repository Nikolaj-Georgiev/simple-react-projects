function ImageGeneration() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500">
      <h1 className="text-3xl font-bold mb-4">Image Generation</h1>

      <p className="text-lg mb-8">
        Generate images using OpenAI's DALL-E model.
      </p>

      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Generate Image
      </button>
    </div>
  );
}

export default ImageGeneration;
