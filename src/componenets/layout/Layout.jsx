import React from 'react'


import './Layout.scss'

const Layout = ({children, id, handleDrag, handleDrop}) => {
    return (
        <div 
            className='app-layout'
            onDragOver={(ev) => ev.preventDefault()}
            onDragStart={handleDrag}
            onDrop={handleDrop}
            id={id}
            draggable={true}
        >
            <div className='app-layout_main'>
                {children}
            </div>
        </div>
    )
}

export default Layout
