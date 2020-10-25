import React from 'react'
import { FaHandshake, FaHome, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <ul>
        <li><Link to='/home'><FaHome size={16}/> Home</Link></li>
        <li><Link to='/home/customers'><FaUsers size={16}/> Customers</Link></li>
        <li><Link to='/home/partners'><FaHandshake size={16}/> Partners</Link></li>
        <li><Link to='/home/logout'><FaSignOutAlt size={16}/> Logout</Link></li>
      </ul>  
    )
}

export default SideBar
