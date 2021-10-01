import React from 'react'

import Form from 'react-bootstrap/Form';
import FileUpload from '../file-upload/FileUpload';
import  Burger from '../../assets/Burger'

import './GroupItemsDetails.scss'

const GroupItemsDetails = ({id, handleDrag, handleDrop}) => {
    return (
        <tr 
            onDragOver={(ev) => ev.preventDefault()}
            onDragStart={handleDrag}
            onDrop={handleDrop}
            id={id}
            className ='app-burger'
            draggable={true}
        >
            <th scope="row"> <Burger/> </th>
            <td className="checkboxTds">
            <input id={`checkboxLabel${id}`} type="checkbox" />
                <label htmlFor={`checkboxLabel${id}`}>
                    
                </label>
            </td>
            <td><FileUpload/></td>
            <td className="inputParentTds"><input type="text" width={170} /></td>
            <td className="inputParentTds numberTd"><input type="text" placeholder='$ 1.5' width={100} /></td>
            <td>
                <Form>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                    />
                </Form>
            </td>
            <td>
                <Form>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                    />
                </Form>
            </td>
        </tr>
    )
}

export default GroupItemsDetails
