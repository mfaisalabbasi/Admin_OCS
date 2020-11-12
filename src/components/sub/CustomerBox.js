import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import profile from '../../images/profile.png'
const CustomerBox = (props) => {
    return (
      <Fragment>
      <Link dta={props.dta} to={{pathname:`/dashboard/customers/${props.dta.email}`,
      state:props.dta}} >
    <div className='user' >
      <div className='pic'><img src={props.dta.profileUrl ? props.dta.profileUrl : profile } alt='imag' width='100%'  height='100%'/></div>
      <div className='email'>
      <div className='txt' style={{color:'#1b4f72'}}>
      <h4>{props.dta.name}</h4>
      <h5>{props.dta.email}</h5>
    
      </div> 
      </div>
     </div>
     </Link>
     </Fragment>
    )
}

export default CustomerBox
