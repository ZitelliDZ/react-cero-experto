import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

interface GifsProps {
  category: string;
}

export const useFetchGifs = ({ category }: GifsProps) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => { 
    const gifs = await getGifs(category);
    setImages(gifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
    
  }, []);

  return {
    images,
    isLoading 
  };
};
