import React from 'react'

import './Input.scss'

const Input = ({placeholder='Toast it', id}) => {
    return (
       <input type="text" id={id} className='app-input' placeholder={placeholder}/>
    )
}

export default Input
