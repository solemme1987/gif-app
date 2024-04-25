import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState( true )

  const getImages = async() =>{
    const newImages = await getGifs( category );
    setImages(newImages)
    setIsLoading(false)
  }

  /* Con esto evito que se me renderise doble cada vez que el estado del componente cambia
    solo va a renderizarce una vez cuando el componente se carga por primera vez  a no ser
    que yo le indique lo contrario */
  useEffect(() => {
    getImages()
  }, [])
  
  return {
    images,
    isLoading
  }
}
