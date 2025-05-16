const API_BASE_URL = "https://api.138.199.223.210.nip.io";

export const fetchWrapper = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    const remainingImagesHeader = response.headers.get("X-Remaining-Images");
    const remainingCount = remainingImagesHeader
      ? parseInt(remainingImagesHeader)
      : null;

    if (!response.ok) {
      let errorMessage;
      try {
        const errorData = await response.json();
        errorMessage =
          errorData.message || errorData.error || `Error: ${response.status}`;
      } catch (e) {
        errorMessage = `Request failed with status ${response.status}`;
      }

      throw new Error(errorMessage);
    }

    return response.headers.get("content-type")?.includes("image")
      ? { data: await response.blob(), remainingCount }
      : { data: await response.json(), remainingCount };
  } catch (error) {
    console.error(`API Error ${endpoint}:`, error);
    throw error;
  }
};
