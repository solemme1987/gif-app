import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event) =>{

    event.preventDefault()

    //si el input esta vacio o tiene solo un caracter la busqueda no se realiza
    if(inputValue.trim().length <= 1) return;

    //la categoria viene como props pasado desde el AddCategory Component
    onNewCategory(inputValue.trim())

    //limpiamos el campo de texto despues de la busqueda
    setInputValue('')
    
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscarg Gif"
        value={inputValue}
        aria-label="Buscar Gif"
        onChange={onInputChange}
      />
    </form>
  )
}
