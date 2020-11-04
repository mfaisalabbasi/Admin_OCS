import React, { Fragment, useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import pic from '../../images/profile.png'
import moment from 'moment'
import {  singlePartner, updatePartner } from '../../store/action/login'
const PartnerProfile = (props) => {
  const [address, setaddress] = useState()
  const idEmail = props.match.params.id
  const parto = useSelector(state => state.partner.partner)
  console.log('my parto', parto)
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(singlePartner(idEmail))
  const fetchNearby = async () => {
    const req = await fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.6ae5458d22712d8adf1548f4610d6784&lat=${parto && parto.latitude}&lon=${parto && parto.longitude}&format=json`)
  
   const res = await req.json()
   setaddress(res.display_name)
  }
  fetchNearby()

  }, [idEmail])
  
//------------------handling update

const [user, setuser] = useState({
  AccountStatus:parto && parto.AccountStatus,
  verification:parto && parto.verification
})
const handleUpdate = ()=>{
 dispatch(updatePartner(parto.partnerKey,user))
}
  const {AccountStatus,verification}=user
  
       return (
       <Fragment>
       <div style={{width:'80%',backgroundColor:'#ffffff',marginLeft:'auto',marginRight:'auto', padding:'20px'}}>
           <div className='profile'><img src={parto ? parto.profileUrl : pic} alt={pic} width='100%'  height='100%'/></div>
            <div className='data'>
              <div className='info'>
              <input type='text' defaultValue={parto ? parto.name : 'Name'} name='name' className='update'/>
                <input type='text' defaultValue={parto ? parto.email : 'Email'} name='email' className='update'/>
                <input type='text' defaultValue={parto ? parto.phone : 'Number'} name='phone' className='update'/>
                <input type='text' defaultValue={parto ? moment(parto.date).format('MMMM Do YYYY, h:mm:ss a') : 'Date'} name='date' className='update'/>
                <input type='text' defaultValue={parto ? address: '12/5/2020'} className='update' name='location'/>
                <input type='text' value={verification} name='verification' onChange={e => setuser({...user, verification:e.target.value})} className='update'/>
                <input type='text' value={AccountStatus} name='accountstatus' onChange={e => setuser({...user,AccountStatus:e.target.value})}  className='update'/>
                <input type='text' defaultValue={parto ? parto.partnerKey:'Id'} className='update'/>
              </div> 
              <button className='btn' onClick={handleUpdate}>Update</button>
            </div>
            </div>
       </Fragment>
    )
}

export default PartnerProfile
// onChange={txt => setusr({...usr,AccountStatus:txt.target.value})}