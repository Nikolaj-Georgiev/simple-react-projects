import { useEffect, useState } from "react";
import { imageService } from "../services/imageService";

export function useBlobUrl(blobOrNull) {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // Create URL when blob changes
    if (blobOrNull instanceof Blob) {
      const newUrl = URL.createObjectURL(blobOrNull);
      setUrl(newUrl);

      // Clean up when component unmounts or blob changes
      return () => {
        imageService.revokeImageUrl(newUrl);
      };
    }
  }, [blobOrNull]);

  return url;
}
