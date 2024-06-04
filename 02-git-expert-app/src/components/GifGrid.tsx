import { Gifs } from "./Gifs";

 

interface GifGridProps {
    categories: string[];
}

export const GifGrid = ({ categories }: GifGridProps) => {


  return (
    <ol>
      {categories.map((category, index) => {
        return <Gifs key={index} category={category} />;
      })}
    </ol>
  );
};


