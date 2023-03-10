import { useState } from "react"

const ItemCount = () => {

    const  [contador, setContador]  = useState(0)

    const sumar = () => {
        setContador( contador + 1)
    }
    const restar = () => {
        if(contador > 0){
            setContador( contador - 1)
        }
    }
  return (
    <div>
        <h1>{contador}</h1>
    <button onClick={sumar}>Sumar</button>
    <button onClick={restar}>Restar</button>
    </div>
  )
}

export default ItemCount
