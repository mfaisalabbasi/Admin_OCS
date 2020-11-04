import {
LOADING_CATEGORY,
CATEGORY_SUCCESS,CATEGORY_FAILED
} from '../constant'

const initialState = {
    loading:false,
    categories:null,
    error:null
}
const category = (state=initialState,action)=>{
    const {type,payload} = action
    switch(type){
        case LOADING_CATEGORY:
            return{
                ...state,
                loading:true,
            }
        case CATEGORY_SUCCESS:
            return{
                ...state,
                loading:false,
                categories:payload
            }
        case CATEGORY_FAILED:
            return{
                ...state,
                loading:false,
                error:payload
            }
        default:
            return state
    }
}

export default category