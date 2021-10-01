import React from 'react'

import GroupItemsDetails from '../groupItemsDetails/GroupItemsDetails';
import useGroupItem from './useGroupItem';

import './GroupItems.scss'

const GroupItem = () => {
    const {handleDrag , handleDrop , eddItem, boxes} = useGroupItem()
    
    return (
        <div className="table-responsive">
            <table className="table customTable">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Default</th>
                        <th scope="col">Item image</th>
                        <th scope="col">Item name</th>
                        <th scope="col">Additional <br /> price (opt)</th>
                        <th scope="col">In stock</th>
                        <th scope="col">ISubcategory (o</th>
                    </tr>
                </thead>
                <tbody>
                   {boxes
                   .sort((a, b) => a.order - b.order)
                   .map((box) => {
                       return <GroupItemsDetails 
                        key={box.id}
                        id={box.id}
                        handleDrag={handleDrag} 
                        handleDrop ={handleDrop}
                       />
                   })}
            </tbody>
            </table>
            <button onClick={eddItem} className='table-responsive_btn'>Add New Item</button>
        </div>
    )
}

export default GroupItem



