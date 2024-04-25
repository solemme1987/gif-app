import { useState } from "react"

/* ARchivo Barril. de esta forma no no tenemos que  tener un import para cada componente.
   el archivo que nos permite hacer esto es  */
import { AddCategory, GifGrid } from "./components"

export const GifApp = () => {

  const [categories, setCategories] = useState(['Demon slayer'])

  const onAddCategory = (newCategory) => {

    //esta sensilla  validacion impide que  se repitan categorias en la lista
    // las que son iguales no las agregas. hace diferencia entre mayusculas y minusculas
    if (categories.includes(newCategory)) return;

    //modificamos la categoria
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>Buscador Gif</h1>
      <AddCategory
        //Pasamos como props la funcion que agrega la caegoria
        onNewCategory={(value) => onAddCategory(value)}
      />

      {
        categories.map((category) => (
          <GifGrid 
            key={category}
            category={category}
          />

        ))
      }

    </>
  )
}
