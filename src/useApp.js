import {useState} from 'react'

const useApp = () => {
    const [dragId, setDragId] = useState();
  const [newGroup, setNewGroup] = useState([
    {
      id: '1',
      order: 1
    },
  ])

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragBox = newGroup.find((box) => box.id === dragId);
    const dropBox = newGroup.find((box) => box.id === ev.currentTarget.id);

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = newGroup.map((box) => {
            if (box.id === dragId) {
                box.order = dropBoxOrder;
            }
            if (box.id === ev.currentTarget.id) {
                box.order = dragBoxOrder;
            }
            return box;
        });

    setNewGroup(newBoxState);
  };

  const createNewGroup = () => {
    setNewGroup((pre) => {
      const lastElement = newGroup[newGroup.length-1]
      console.log(lastElement.id);
      return [
        ...pre,
         {
           id: +lastElement.id + 1 + '',
           order: lastElement.id + 1
          }
        ]
    })
  }

  return {handleDrag, handleDrop, createNewGroup, newGroup}
}

export default useApp