import {
LOGIN_LOADING,
LOGIN_SUCCESS,
LOGIN_FAILED,
LOGOUT,
LOADING_CUSTOMER,
CUSTOMER_SUCCESS,
CUSTOMER_FAILED,
LOADING_CATEGORY,
CATEGORY_FAILED,
CATEGORY_SUCCESS,
LOADING_PARTNER,
PARTNER_FAILED,
PARTNER_SUCCESS,
CUSTOMER_UPDATE,
PARTNER_UPDATE
} from '../constant'
import {auth} from '../../index'

 
// ==========================================================Logins Action
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

// ==========================================================Customers Action

export const fetchCustomers = ()=> async dispatch => {
  dispatch({
    type:LOADING_CUSTOMER
  })
  try {
    const req = await fetch(`https://on-click-s.firebaseio.com/customers.json`);
    const res = await req.json();
    let loaded = [];
    if (res.error) {
      dispatch({
        type: CUSTOMER_FAILED,
        payload: 'Failed Loading Customers',
      })
    }else{
      const vl = Object.keys(res);
      vl.map(item => loaded.push(res[item]));
      dispatch({
        type:CUSTOMER_SUCCESS,
        payload:loaded.reverse()
      })
    }
  } catch (error) {
    dispatch({
      type: CUSTOMER_FAILED,
      payload: 'Failed Loading Customers',
    })
  }
}

//-------------------Fill Customer
export const fillCustomer = (customer) => dispatch =>{
  dispatch({
    type:CUSTOMER_UPDATE,
    payload:customer
  })
}

//------------------ Updating Customer
export const updateProfile = (userid, user) => async dispatch => {
  dispatch({
    type: LOADING_CUSTOMER,
  });
  try {
    const {AccountStatus,verification} = user
    const req = await fetch(
      `https://on-click-s.firebaseio.com/customers/${userid}.json`,
      {
        method: 'patch',
        ContentType: 'application/json',
        body: JSON.stringify({
          AccountStatus,
          verification
        }),
      },
    );
    const res = await req.json();
    console.log('update resp = = =',res)
    res.error
      ? dispatch({
          type: CUSTOMER_FAILED,
          payload: 'res.error',
        })
      : dispatch({
          type: CUSTOMER_UPDATE,
          payload: res,
        });
  } catch (error) {
    dispatch({
      type: CUSTOMER_FAILED,
      payload: 'error',
    });
  }
};

export const FindSingle = (email) => async dispatch => {
  dispatch({
    type: LOADING_CUSTOMER,
  });
  try {
    const req = await fetch(
      `https://on-click-s.firebaseio.com/customers.json`
    );
    const res = await req.json();
    let loaded = []
    const vl = Object.keys(res);
    vl.map(item => loaded.push(res[item]));
    const filterd = loaded.filter(itm=> itm.email.toLowerCase() === email.toLowerCase())[0]
    res.error
      ? dispatch({
          type: CUSTOMER_FAILED,
          payload: 'res.error',
        })
      : dispatch({
          type: CUSTOMER_UPDATE,
          payload: filterd,
        });
  } catch (error) {
    dispatch({
      type: CUSTOMER_FAILED,
      payload: 'error',
    });
  }
};


//-------------------Fetching Categories

export const fetchCategories = ()=> async dispatch => {
  dispatch({
    type:LOADING_CATEGORY
  })
  try {
    const req = await fetch(`https://on-click-s.firebaseio.com/services.json`);
    const res = await req.json();
    let loaded = [];
    if (res.error) {
      dispatch({
        type: CATEGORY_FAILED,
        payload: 'Failed Loading category',
      })
    }else{
      const vl = Object.keys(res);
      vl.map(item => loaded.push(res[item]));
      dispatch({
        type:CATEGORY_SUCCESS,
        payload:loaded
      })
    }
  } catch (error) {
    dispatch({
      type: CATEGORY_FAILED,
      payload: 'Failed Loading categories',
    })
  }
}

// ==========================================================Fetching Partners

export const fetchPartners = (cat)=> async dispatch => {
  dispatch({
    type:LOADING_PARTNER
  })
  try {
    const req = await fetch(`https://on-click-s.firebaseio.com/sellers.json`);
    const res = await req.json();
    let loaded = [];
    if (res.error) {
      dispatch({
        type: PARTNER_FAILED,
        payload: 'Failed Loading Partners',
      })
    }else{
      const vl = Object.keys(res);
      vl.map(item => loaded.push(res[item]));
      const filterd = loaded.filter(partner=> partner.service === cat.toLowerCase())
      dispatch({
        type:PARTNER_SUCCESS,
        payload:filterd.reverse()
      })
    }
  } catch (error) {
    dispatch({
      type: PARTNER_FAILED,
      payload: 'Failed Loading Partners',
    })
  }
}

//-------------------Fill Customer
export const fillPartner = (partner) => dispatch =>{
  dispatch({
    type:PARTNER_UPDATE,
    payload:partner
  })
}

export const singlePartner = (email) => async dispatch => {
  dispatch({
    type: LOADING_PARTNER,
  });
  try {
    const req = await fetch(
      `https://on-click-s.firebaseio.com/sellers.json`
    );
    const res = await req.json();
    let loaded = []
    const vl = Object.keys(res);
    vl.map(item => loaded.push(res[item]));
    const filterd = loaded.filter(itm=> itm.email.toLowerCase() === email.toLowerCase())[0]
    res.error
      ? dispatch({
          type: PARTNER_FAILED,
          payload: 'res.error',
        })
      : dispatch({
          type: PARTNER_UPDATE,
          payload: filterd,
        });
  } catch (error) {
    dispatch({
      type: PARTNER_FAILED,
      payload: 'error',
    });
  }
};


//------------------ Updating Partners
export const updatePartner = (userid, user) => async dispatch => {
  dispatch({
    type: LOADING_PARTNER,
  });
  try {
    const {AccountStatus,verification} = user
    const req = await fetch(
      `https://on-click-s.firebaseio.com/sellers/${userid}.json`,
      {
        method: 'patch',
        ContentType: 'application/json',
        body: JSON.stringify({
          AccountStatus,
          verification
        }),
      },
    );
    const res = await req.json();
    console.log('update resp = = =',res)
    res.error
      ? dispatch({
          type: PARTNER_FAILED,
          payload: 'res.error',
        })
      : dispatch({
          type: PARTNER_UPDATE,
          payload: res,
        });
  } catch (error) {
    dispatch({
      type: PARTNER_FAILED,
      payload: 'error',
    });
  }
};
