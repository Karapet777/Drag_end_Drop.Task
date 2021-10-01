import React from 'react'

import './Select.scss'

const Select = ({value = 'Multiple items', name}) => {
    return (
        <select className='app-select' name={name}>
            <option value={value}>{value}</option>
        </select>
    )
}

export default Select
