import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Burger from '../../assets/Burger';
import Remove from '../../assets/Remove';
import Input from '../input/Input';
import Select from '../select/Select';
import GroupItem from '../groupItems/GroupItem';

import './GroupDetailsHeader.scss'

const GroupDetailsHeader = ({numberGroup}) => {
    return (
        <div className='app-GroupDetailsHeader'>
            <div className='app-GroupDetailsHeader_root-block'>
                <div className='app-GroupDetailsHeader_root-block_titles'>
                </div>
                <div className='app-GroupDetailsHeader_root-block_details flexContainer'>
                    <div className="gruopHeader_flexItems flexItem-1">
                        <Burger/>    
                    </div> 
                    <div className="gruopHeader_flexItems flexItem-2">
                        <label htmlFor="groupnameID">Group name {numberGroup}</label>
                        <Input id="groupnameID" />
                    </div>
                    <div className="gruopHeader_flexItems flexItem-3">
                        <label>Item Choice</label>
                        <Select/>
                    </div>
                    <div className="gruopHeader_flexItems flexItem-4"><Remove/></div>
                </div>
           
            </div>
            
            <div className='app-GroupDetailsHeader_root-block'>
                <div className='app-GroupDetailsHeader_root-block_titles'>
                </div>
                <div className='app-GroupDetailsHeader_root-block_details flexContainer checkFlexContainer'>
                    <div className="gruopHeader_flexItems flexItem-1">
                    </div> 
                    <div className="gruopHeader_flexItems flexItem-2 pl-0">
                        <div className="swichParent">
                            <span>Show images</span>
                            <Form>
                                <Form.Check 
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                        </div>
                    </div>
                    <div className="gruopHeader_flexItems flexItem-3">
                        <div className="swichParent">
                            <span>Visible if other <br/> items selected</span>
                            <Form>
                                <Form.Check 
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                        </div>
                    </div>
                    <div className="gruopHeader_flexItems flexItem-4"></div>
                </div>
           
            </div>

            <div className='app-GroupDetailsHeader_root-block'>
                <div className='app-GroupDetailsHeader_root-block_titles'>
                </div>
                <div className='app-GroupDetailsHeader_root-block_details flexContainer'>
                    <div className="gruopHeader_flexItems flexItem-1">
                        
                    </div> 
                    <div className="gruopHeader_flexItems flexItem-2">
                        <Select value='AND'/>
                    </div>
                    <div className="gruopHeader_flexItems flexItem-3">
                        <Select value='Bread/Rye'/>
                    </div>
                    <div className="gruopHeader_flexItems flexItem-4"></div>
                </div>
           
            </div>
            <div className='app-GroupDetailsHeader_root-block_details flexContainer'>
                    <div className="gruopHeader_flexItems flexItem-1">
                    </div> 
                    <div className="gruopHeader_flexItems flexItem-2 pl-0">
                        <Button className='app-GroupDetailsHeader_btn'  variant="primary">Add Variable</Button>
                    </div>
                </div>
                
            <div className ='app-GroupDetailsHeader_line'></div>
            <GroupItem/>
        </div>
    )
}

export default GroupDetailsHeader
