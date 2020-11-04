import React from 'react'
import { useHistory } from 'react-router-dom'
import Background from '../images/bg.png'

const Home = () => {
    const history = useHistory()
    const handleRedirect = ()=>{
       history.push('/dashboard')
    }
    return (
        <div style={{height:'100vh', backgroundImage: `url(${Background})`,backgroundSize:'cover', display:"flex",justifyContent:'center',alignItems:'center' }}>
           
            <button onClick={handleRedirect} style={{width:'17%',height:'55px',
            backgroundColor:'#ffffff',borderRadius:'50px',
            cursor:'pointer',color:'#006AFF' ,fontFamily:'ebrima',fontWeight:'bold',fontSize:'18px' ,border:'0.3px solid #ffffff'}}>Go to Dashboard</button>
        </div>
    )
}

export default Home
