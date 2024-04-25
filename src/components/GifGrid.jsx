import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  


  return (
    <>
      <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargando...</h2> )
        }
        <div  className="card-grid">
        {
          images.map((image) =>( 
            
              <GifItem 
               key={image.id}
                // a esta forma de pasar los props  le llamamos esparcir las propiedades.
                // esto significa que todas las propiedades que trae image podran ser recibidas
                // por pof GifItem  como props
                { ...image }
              />
            
          ))
        }
       </div>
    </>
   
  )
}
