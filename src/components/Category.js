import React from 'react'
import pic from '../images/boy.jpg'
const Category = () => {
    return (
        <div className='container'>
        <div className='section'><div className='searchCon' >
        <input className='search' type='text' placeholder='Search Partner'/>
       <button className='btn'>Search</button>
        </div>
        <div className='userCon'>
        <div className='user'>
         <div className='pic'><img src={pic} alt='pic' width='100%'  height='100%'/></div>
         <div className='email'>
         <div className='txt'>
         <h4>Muhammad Faisal</h4>
         <h5>faisal@gmail.com</h5>
         </div> 

         </div>
        </div>
        <div className='user'>
         <div className='pic'><img src={pic} alt='pic' width='100%'  height='100%'/></div>
         <div className='email'>
         <div className='txt'>
         <h4>Muhammad Faisal</h4>
         <h5>faisal@gmail.com</h5>
         </div> 

         </div>
        </div>
        <div className='user'>
         <div className='pic'><img src={pic} alt='pic' width='100%'  height='100%'/></div>
         <div className='email'>
         <div className='txt'>
         <h4>Muhammad Faisal</h4>
         <h5>faisal@gmail.com</h5>
         </div> 

         </div>
        </div>
        <div className='user'>
         <div className='pic'><img src={pic} alt='pic' width='100%'  height='100%'/></div>
         <div className='email'> <div className='txt'>
         <h4>Muhammad Faisal</h4>
         <h5>faisal@gmail.com</h5>
         </div> 
</div>
        </div>
        <div className='user'>
         <div className='pic'><img src={pic} alt='pic' width='100%'  height='100%'/></div>
         <div className='email'><div className='txt'>
         <h4>Muhammad Faisal</h4>
         <h5>faisal@gmail.com</h5>
         </div> 

</div>
        </div>
      </div></div>
        <div className='section'>
            <div className='profile'><img src={pic} alt='pic' width='100%'  height='100%'/></div>
            <div className='data'>
              <div className='info'>
              <input type='text' placeholder='Muhammad Faisal' className='update'/>
                <input type='text' placeholder='Faisal@gmail.com' className='update'/>
                <input type='text' placeholder='Date' className='update'/>
                <input type='text' placeholder='Phone' className='update'/>
                <input type='text' placeholder='Location' className='update'/>
                <input type='text' placeholder='Verification' className='update'/>
                <input type='text' placeholder='Account Status' className='update'/>
                <input type='text' placeholder='Account Status' className='update'/>
              </div> 
              <button className='btn'>Update</button>
            </div>
        </div>
        
        </div>
    )
}

export default Category
