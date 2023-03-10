import React from 'react'

export const ProductCard = ( {title, price=0, isRed}) => {
  const saludar = ()=>{
    console.log("hola")
  }
  return (
    <div>
      <h1 className={ isRed ? "red" : "blue"}> {title} </h1>
      <h2>{price}</h2>
      <button onClick={saludar}>saludar</button>
    </div>
  )
}

