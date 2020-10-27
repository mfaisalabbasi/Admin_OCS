import {
LOGIN_LOADING,
LOGIN_SUCCESS,
LOGIN_FAILED,
LOGOUT
} from '../constant'
import {auth} from '../../index'


export const LoginFunc = (user) => async dispatch =>{
    dispatch({
        type: LOGIN_LOADING,
      });
      try {
        const {email, password} = user;
        auth.signInWithEmailAndPassword(email, password).then(res=>
          dispatch({type:LOGIN_SUCCESS,payload:res.user})
        ).catch(err=>dispatch({type:LOGIN_FAILED,payload:err.message}) )
      
      } catch (error) {
dispatch({type:LOGIN_FAILED,payload:error.message})       
      }
}


export const LogoutFun = ()=> async dispatch =>{
  
  try {
    dispatch({
      type:LOGOUT
    })
  } catch (error) {
    console.log(error)
  }
 
}