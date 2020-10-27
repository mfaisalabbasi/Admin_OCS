import {LOGIN_LOADING,
LOGIN_SUCCESS,LOGIN_FAILED, LOGOUT} from '../constant'
const initialState = {
    loading:false,
    isAuthenticated:false,
    user:null,
    error:null
}


const login = (state=initialState,action)=>{
    const {type, payload} = action;
    switch (type) {
        case LOGIN_LOADING:
          return {
            ...state,
            loading: true,
          };
        case LOGIN_SUCCESS :
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:payload
            }
        case LOGIN_FAILED:
           return{ ...state,
            loading:false,
            isAuthenticated:false,
            error:payload
        }
       case LOGOUT:
           return{
            ...state,
            isAuthenticated:false,
            loading:false,
            user:null,
            error:null
           }
       
        default:
        return state
}}
export default login