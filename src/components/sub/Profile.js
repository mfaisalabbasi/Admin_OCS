import React, { Fragment, useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import pic from '../../images/profile.png'
import moment from 'moment'
import { fillCustomer, FindSingle, updateProfile } from '../../store/action/login'
const Profile = (props) => {
  const [address, setaddress] = useState()
  const idEmail = props.match.params.id
  const customers = useSelector(state => state.customer.customers)
  const custo = useSelector(state => state.customer.customer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FindSingle(idEmail))
  
  const fetchNearby = async () => {
    const req = await fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.6ae5458d22712d8adf1548f4610d6784&lat=${custo && custo.location.latitude}&lon=${custo && custo.location.longitude}&format=json`)
  
   const res = await req.json()
   setaddress(res.display_name)
  }
  fetchNearby()

  }, [idEmail])
  
  //------------------handling update

  const [user, setuser] = useState({
    AccountStatus:custo && custo.AccountStatus,
    verification:custo && custo.verification
  })
  const handleUpdate = ()=>{
   dispatch(updateProfile(custo.customerId,user))
  }
    const {AccountStatus,verification}=user
       return (
       <Fragment>
       <div style={{width:'80%',backgroundColor:'#ffffff',marginLeft:'auto',marginRight:'auto', padding:'20px'}}>
           <div className='profile'><img src={custo ? custo.profileUrl : pic} alt={pic} width='100%'  height='100%'/></div>
            <div className='data'>
              <div className='info'>
              <input type='text' defaultValue={custo ? custo.name : 'Name'} name='name' className='update'/>
                <input type='text' defaultValue={custo ? custo.email : 'Email'} name='email' className='update'/>
                <input type='text' defaultValue={custo ? custo.phone : 'Number'} name='phone' className='update'/>
                <input type='text' defaultValue={custo ? moment(custo.date).format('MMMM Do YYYY, h:mm:ss a') : 'Date'} name='date' className='update'/>
                <input type='text' defaultValue={custo ? address: '12/5/2020'} className='update' name='location'/>
                <input type='text' value={verification} name='verification' onChange={e => setuser({...user, verification:e.target.value})} className='update'/>
                <input type='text' value={AccountStatus} name='accountstatus' onChange={e => setuser({...user,AccountStatus:e.target.value})}  className='update'/>
                <input type='text' defaultValue={custo ? custo.customerId:'Id'} className='update'/>
              </div> 
              <button className='btn' onClick={handleUpdate}>Update</button>
            </div>
            </div>
       </Fragment>
    )
}

export default Profile
