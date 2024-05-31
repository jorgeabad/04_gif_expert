
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./Gifitem";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
  };

  useEffect(() => {
    getImages();
  }, []);

  //getGifs(category)
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
        images.map((img) => ( <GifItem key={img.id} {...img} />))
        }  
      </div>
     
    </>
  );
};
