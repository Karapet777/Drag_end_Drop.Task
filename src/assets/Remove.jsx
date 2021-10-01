import React from 'react'

import removeIcon from './../assets/removeIcon.png'

import './Remove.scss'

const Remove = ({click}) => {
    return (
       <img className ='app-remove' onClick={click} src={removeIcon} alt="icon" />
    )
}

export default Remove
