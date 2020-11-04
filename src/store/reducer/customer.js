import {LOADING_CUSTOMER,CUSTOMER_SUCCESS,CUSTOMER_FAILED, CUSTOMER_UPDATE} from '../constant'

const initialState = {
    loading:false,
    customers:null,
    customer:null,
    error:null
}

const customer = (state=initialState,action)=>{
    const {type,payload} = action
    switch(type){
        case LOADING_CUSTOMER:
            return{
                ...state,
                loading:true,
            }
        case CUSTOMER_SUCCESS:
            return{
                ...state,
                loading:false,
                customers:payload
            }
        case CUSTOMER_FAILED:
            return{
                ...state,
                loading:false,
                error:payload
            }
        case CUSTOMER_UPDATE:
            return{
                ...state,
                loading:false,
                customer:payload
            }
        default:
            return state
    }
}

export default customer