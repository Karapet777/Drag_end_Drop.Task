import React from 'react'
import Button from 'react-bootstrap/Button';

import Layout from './componenets/layout/Layout'
import GroupDetailsHeader from './componenets/groupDetailsHeader/GroupDetailsHeader';
import useApp from './useApp'

import './App.scss'

function App() {
  const {handleDrag, handleDrop, createNewGroup, newGroup} = useApp()
  
  return (
    <div className="App">
     {newGroup
      .sort((a, b) => a.order - b.order)
      .map((box) => {
        return <div key={box.id}>
          <Layout 
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            id={box.id}
          >
          <GroupDetailsHeader numberGroup={box.id}/>
          </Layout>
          <div className='App_block'>
          <Button onClick={createNewGroup} className="App_block_btn" variant="primary">New Group</Button>
          </div>
        </div>
     })}

    </div>
  );
}

export default App;
