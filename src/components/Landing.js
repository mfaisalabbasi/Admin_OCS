import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className='img'>
          {/* <div className='imag'><img src={pic} alt='ungli' width='100%' height='100%'/></div>   */}
          <div className='mainCon'>
            <div className='adminBoxCon'>
            <button className='adminBox'><Link to='/dashboard/partners' className='BoxTxt'>Partners</Link></button>
             <button className='adminBox'>Total:- 13000</button>
             <button className='adminBox'>Verified:- 8000</button>
             <button className='adminBox'><Link to='/dashboard/customers' className='BoxTxt'>Customers</Link></button>
             <button className='adminBox'>Total:- 5000</button>
             <button className='adminBox'>Verified:- 5000</button>
            
            </div>
          </div>
        </div>
    )
}

export default Landing
