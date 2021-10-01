import {useState} from 'react'

const  useGroupItem = () => {
    const [dragId, setDragId] = useState();
    const [boxes, setBoxes] = useState([
        {
            id: '1',
            order:1
        },
        {
            id: '2',
            order:2
        },
        {
            id: '3',
            order: 3
        },
    ])
    const handleDrag = (ev) => {
        setDragId(ev.currentTarget.id);
      };

    const handleDrop = (ev) => {
    const dragBox = boxes.find((box) => box.id === dragId);
    const dropBox = boxes.find((box) => box.id === ev.currentTarget.id);

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = boxes.map((box) => {
            if (box.id === dragId) {
                box.order = dropBoxOrder;
            }
            if (box.id === ev.currentTarget.id) {
                box.order = dragBoxOrder;
            }
            return box;
        });

        setBoxes(newBoxState);
    };
  
    const eddItem = () => {
        setBoxes((pre) => {
            const lastElement = boxes[boxes.length-1]
            return [
                ...pre, 
                    { 
                        id: (lastElement.id + 1) + '',
                        order:lastElement.id + 1
                    }
            ]
        })
    }
    return {handleDrag , handleDrop , eddItem, boxes}
}

export default useGroupItem