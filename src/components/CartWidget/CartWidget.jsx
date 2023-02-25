import React from 'react'
import style from "./CartWidget.module.css"
import {BsCart4} from "react-icons/bs"
export const CartWidget = () => {
  return (
    <div className={style.cartContainer}>

      <BsCart4 size="40px"/>
    </div>
  )
}
