import React from 'react'
import Content from './Content';
import SideBar from './SideBar';
const Dashboard = () => {
    return (
        <div className='main'>
            <div className='header'>
               <div className='tit'>Administration Panel</div> 
            </div>
            <div className='wrapper'>
            <div className='sidebar'>
               <SideBar />               
            </div>
            <div className='content'>
            <Content />
            </div>
</div>
        </div>
    )
}

export default Dashboard
