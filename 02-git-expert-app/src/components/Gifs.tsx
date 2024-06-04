
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from './GifItem';

interface GifsProps {
  category: string;
}

export const Gifs = ({ category }: GifsProps) => {
  const { images, isLoading } = useFetchGifs({ category });

  /*
  const [images, setImages] = useState([]);


  const getImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
  };

  useEffect(() => {
    // getGifs(category).then((imgs) => {
    //   setImages(imgs);
    // });

    getImages();
  }, []);*/

  if ( isLoading ) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img: any) => {
          return <GifItem key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};


