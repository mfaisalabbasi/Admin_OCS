import React, { useState } from 'react'


import Content from './Content';
import SideBar from './SideBar';
import pic from '../images/ocs.jpg'
const Dashboard = () => {
    const [home, sethome] = useState(false)
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
            {home ? <div>
                <img  src={pic} width='100%' height='450px'/>
            </div> : null}
            <Content />
            </div>
</div>
        </div>
    )
}

export default Dashboard
