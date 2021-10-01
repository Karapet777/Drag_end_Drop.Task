import React from 'react'

import burgerIcon from './../assets/burgerIcon.png'
import './Burger.scss'

const Burger = ({click}) => {
    return (
       <img  onClick={click} src={burgerIcon} alt="icon" draggable={false} />
    )
}

export default Burger
