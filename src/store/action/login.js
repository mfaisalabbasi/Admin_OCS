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
  PARTNER_UPDATE,
  FILTERD_PARTNER,
  LOADING_ORDERS,
  FAILED_ORDERS,
  SUCCESS_ORDERS,
  LOADING_NEAREST_PARTNERS,
  SUCCESS_NEAREST_PARTNERS,
  FAILED_NEAREST_PARTNERS,
} from "../constant";
import { auth, db } from "../../index";
import { isPointWithinRadius, orderByDistance } from "geolib";

// ==========================================================Logins Action
export const LoginFunc = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  try {
    const { email, password } = user;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.user }))
      .catch((err) => dispatch({ type: LOGIN_FAILED, payload: err.message }));
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, payload: error.message });
  }
};

export const LogoutFun = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    console.log(error);
  }
};

// ==========================================================Customers Action

export const fetchCustomers = () => async (dispatch) => {
  dispatch({
    type: LOADING_CUSTOMER,
  });
  try {
    const req = await fetch(`https://on-click-s.firebaseio.com/customers.json`);
    const res = await req.json();
    let loaded = [];
    if (res.error) {
      dispatch({
        type: CUSTOMER_FAILED,
        payload: "Failed Loading Customers",
      });
    } else {
      const vl = Object.keys(res);
      vl.map((item) => loaded.push(res[item]));
      dispatch({
        type: CUSTOMER_SUCCESS,
        payload: loaded.reverse(),
      });
    }
  } catch (error) {
    dispatch({
      type: CUSTOMER_FAILED,
      payload: "Failed Loading Customers",
    });
  }
};

//------------------ Updating Customer
export const updateProfile = (userid, user) => async (dispatch) => {
  dispatch({
    type: LOADING_CUSTOMER,
  });
  try {
    const { Astatus, veri } = user;
    const req = await fetch(
      `https://on-click-s.firebaseio.com/customers/${userid}.json`,
      {
        method: "patch",
        ContentType: "application/json",
        body: JSON.stringify({
          AccountStatus: Astatus,
          verification: veri,
        }),
      }
    );
    const res = await req.json();
    res.error
      ? dispatch({
          type: CUSTOMER_FAILED,
          payload: "res.error",
        })
      : dispatch({
          type: CUSTOMER_UPDATE,
          payload: res,
        });
  } catch (error) {
    dispatch({
      type: CUSTOMER_FAILED,
      payload: "error",
    });
  }
};

export const FindSingle = (email) => async (dispatch) => {
  dispatch({
    type: LOADING_CUSTOMER,
  });
  try {
    const req = await fetch(`https://on-click-s.firebaseio.com/customers.json`);
    const res = await req.json();
    let loaded = [];
    const vl = Object.keys(res);
    vl.map((item) => loaded.push(res[item]));
    const filterd = loaded.filter(
      (itm) => itm.email.toLowerCase() === email.toLowerCase()
    )[0];
    res.error
      ? dispatch({
          type: CUSTOMER_FAILED,
          payload: "res.error",
        })
      : dispatch({
          type: CUSTOMER_UPDATE,
          payload: filterd,
        });
  } catch (error) {
    dispatch({
      type: CUSTOMER_FAILED,
      payload: "error",
    });
  }
};

//-------------------Fetching Categories

export const fetchCategories = () => async (dispatch) => {
  dispatch({
    type: LOADING_CATEGORY,
  });
  try {
    const req = await fetch(`https://on-click-s.firebaseio.com/services.json`);
    const res = await req.json();
    let loaded = [];
    if (res.error) {
      dispatch({
        type: CATEGORY_FAILED,
        payload: "Failed Loading category",
      });
    } else {
      const vl = Object.keys(res);
      vl.map((item) => loaded.push(res[item]));
      dispatch({
        type: CATEGORY_SUCCESS,
        payload: loaded,
      });
    }
  } catch (error) {
    dispatch({
      type: CATEGORY_FAILED,
      payload: "Failed Loading categories",
    });
  }
};

// ==========================================================Fetching Partners

export const fetchPartners = () => async (dispatch) => {
  dispatch({
    type: LOADING_PARTNER,
  });
  try {
    const req = await fetch(`https://on-click-s.firebaseio.com/sellers.json`);
    const res = await req.json();
    let loaded = [];
    if (res.error) {
      dispatch({
        type: PARTNER_FAILED,
        payload: "Failed Loading Partners",
      });
    } else {
      const vl = Object.keys(res);
      vl.map((item) => loaded.push(res[item]));
      dispatch({
        type: PARTNER_SUCCESS,
        payload: loaded.reverse(),
      });
    }
  } catch (error) {
    dispatch({
      type: PARTNER_FAILED,
      payload: "Failed Loading Partners",
    });
  }
};

// ==========================================================Filterd Partners

export const filterdPartners = (cat) => async (dispatch) => {
  dispatch({
    type: LOADING_PARTNER,
  });
  try {
    const req = await fetch(`https://on-click-s.firebaseio.com/sellers.json`);
    const res = await req.json();
    let loaded = [];
    if (res.error) {
      dispatch({
        type: PARTNER_FAILED,
        payload: "Failed Loading filter Partners",
      });
    } else {
      const vl = Object.keys(res);
      vl.map((item) => loaded.push(res[item]));
      const filterd = loaded.filter(
        (partner) => partner.service && partner.service === cat.toLowerCase()
      );
      dispatch({
        type: FILTERD_PARTNER,
        payload: filterd.reverse(),
      });
    }
  } catch (error) {
    dispatch({
      type: PARTNER_FAILED,
      payload: "Failed Loading filtto Partners",
    });
  }
};

// ==========================================================Search Func

export const searchFunc = (input, cat) => async (dispatch) => {
  dispatch({
    type: LOADING_PARTNER,
  });
  try {
    const req = await fetch(`https://on-click-s.firebaseio.com/sellers.json`);
    const res = await req.json();
    let loaded = [];
    if (res.error) {
      dispatch({
        type: PARTNER_FAILED,
        payload: "Failed Loading filter Partners",
      });
    } else {
      const vl = Object.keys(res);
      vl.map((item) => loaded.push(res[item]));
      const typefilterd = loaded.filter(
        (partner) => partner.service && partner.service === cat.toLowerCase()
      );
      const filterd = typefilterd.filter(
        (partner) =>
          partner.phone &&
          partner.phone.toLowerCase().includes(input.toLowerCase())
      );
      dispatch({
        type: FILTERD_PARTNER,
        payload: filterd.reverse(),
      });
    }
  } catch (error) {
    dispatch({
      type: PARTNER_FAILED,
      payload: "Failed Loading filtto Partners",
    });
  }
};

//-------------------Fill Customer
export const fillPartner = (partner) => (dispatch) => {
  dispatch({
    type: PARTNER_UPDATE,
    payload: partner,
  });
};

export const singlePartner = (email) => async (dispatch) => {
  dispatch({
    type: LOADING_PARTNER,
  });
  try {
    const req = await fetch(`https://on-click-s.firebaseio.com/sellers.json`);
    const res = await req.json();
    let loaded = [];
    const vl = Object.keys(res);
    vl.map((item) => loaded.push(res[item]));
    const filterd = loaded.filter(
      (itm) => itm.email.toLowerCase() === email.toLowerCase()
    )[0];
    res.error
      ? dispatch({
          type: PARTNER_FAILED,
          payload: "res.error",
        })
      : dispatch({
          type: PARTNER_UPDATE,
          payload: filterd,
        });
  } catch (error) {
    dispatch({
      type: PARTNER_FAILED,
      payload: "error",
    });
  }
};

//------------------ Updating Partners
export const updatePartner = (userid, user) => async (dispatch) => {
  dispatch({
    type: LOADING_PARTNER,
  });
  try {
    const { Astatus, veri } = user;
    const req = await fetch(
      `https://on-click-s.firebaseio.com/sellers/${userid}.json`,
      {
        method: "patch",
        ContentType: "application/json",
        body: JSON.stringify({
          AccountStatus: Astatus,
          verification: veri,
        }),
      }
    );
    const res = await req.json();
    res.error
      ? dispatch({
          type: PARTNER_FAILED,
          payload: "res.error",
        })
      : dispatch({
          type: PARTNER_UPDATE,
          payload: res,
        });
  } catch (error) {
    dispatch({
      type: PARTNER_FAILED,
      payload: "error",
    });
  }
};

//-----------------------------------------------------Orders Section

// ========================================================== Fetch Orders

export const fetchOrders = () => async (dispatch) => {
  dispatch({
    type: LOADING_ORDERS,
  });
  try {
    const req = await fetch(`https://on-click-s.firebaseio.com/orders.json`);
    const res = await req.json();
    let loaded = [];
    if (res.error) {
      dispatch({
        type: FAILED_ORDERS,
        payload: "Failed Orders",
      });
    } else {
      const vl = Object.keys(res);
      vl.map((item) => loaded.push(res[item]));
      dispatch({
        type: SUCCESS_ORDERS,
        payload: loaded.reverse(),
      });
    }
  } catch (error) {
    dispatch({
      type: FAILED_ORDERS,
      payload: "Failed Loading orders",
    });
  }
};

//--------------------------------------------Nearsest Partner

export const nearestPartners = (customer) => async (dispatch) => {
  dispatch({
    type: LOADING_NEAREST_PARTNERS,
  });
  try {
    const req = await fetch(`https://on-click-s.firebaseio.com/sellers.json`);
    const res = await req.json();
    let loaded = [];
    if (res.error) {
      dispatch({
        type: FAILED_NEAREST_PARTNERS,
        payload: "error",
      });
    } else {
      const vl = Object.keys(res);
      vl.map((item) => loaded.push(res[item]));
      const filterd = loaded.filter(
        (itm) =>
          customer &&
          itm.service === customer.service.toLowerCase() &&
          itm.status === true &&
          isPointWithinRadius(
            {
              latitude: customer.location.latitude,
              longitude: customer.location.longitude,
            },
            {
              latitude: itm.latitude,
              longitude: itm.longitude,
            },
            itm.radius * 1000
          )
      );
      const nearby = orderByDistance(
        {
          latitude: customer.location.latitude,
          longitude: customer.location.longitude,
        },
        filterd
      );

      nearby.length < 1
        ? dispatch({
            type: FAILED_NEAREST_PARTNERS,
            payload: "jeen da error",
          })
        : dispatch({
            type: SUCCESS_NEAREST_PARTNERS,
            payload: nearby,
          });
    }
  } catch (error) {
    console.log("err", error);
    dispatch({
      type: FAILED_NEAREST_PARTNERS,
      payload: "error",
    });
  }
};

export const onSubmittingOrder = (customer, partner) => async (dispatch) => {
  let date = Date.now();

  //-----------customer Data
  let customerData = {};
  customerData.name = customer.name;
  customerData.location = customer.location;
  customerData.phone = customer.phone;
  customerData.profileUrl = customer.profileUrl ? customer.profileUrl : null;
  customerData.submitDate = date;
  customerData.route = "Notifications";

  //------------partner Data
  let partnerdata = {};
  partnerdata.name = partner.name;
  partnerdata.expertise = partner.expertise;
  partnerdata.latitude = partner.latitude;
  partnerdata.longitude = partner.longitude;
  partnerdata.phone = partner.phone;
  partnerdata.profileUrl = partner.profileUrl ? partner.profileUrl : null;
  partnerdata.submitDate = date;
  partnerdata.route = "Notifications";

  // sending Notification to Customer
  const req = await fetch("https://fcm.googleapis.com/fcm/send", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "key=AAAAuLwgx98:APA91bEHs_XI72VjkoOYNXrERce2paTgLcc0_xDic60YQMSWOkKSJ2DoEJBUm4IATBuVCA2ft81bIFbj6legdM-KjwQmDUnhbSQAjfvPlGpPQ6x_LbGQKI0D0UtNKrdUeCi88ug-lD1f",
    },
    body: JSON.stringify({
      to: customer.Devicetoken,
      direct_book_ok: true,
      notification: {
        title: customer.name,
        body: `${partner.name} is on the way, kindly contact partner `,
        sound: "default",
      },
      data: partnerdata,
    }),
  });

  //----------Sending job to customer
  db.ref()
    .child("customers")
    .child(customer.customerId)
    .child("hiring")
    .push(partnerdata)
    .then((res) => console.log("job request to cust success"))
    .catch((err) => console.log("something went wrong !!!"));

  // sending Notification to Partner
  await fetch("https://fcm.googleapis.com/fcm/send", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "key=AAAAuLwgx98:APA91bEHs_XI72VjkoOYNXrERce2paTgLcc0_xDic60YQMSWOkKSJ2DoEJBUm4IATBuVCA2ft81bIFbj6legdM-KjwQmDUnhbSQAjfvPlGpPQ6x_LbGQKI0D0UtNKrdUeCi88ug-lD1f",
    },
    body: JSON.stringify({
      to: partner.Devicetoken,
      notification: {
        title: partner.name,
        body: `${customer.name} Hired you for job, kindly contact `,
        sound: "default",
      },
      data: customerData,
    }),
  });

  // //----------Sending job to Partner
  db.ref()
    .child("sellers")
    .child(partner.partnerKey)
    .child("jobs")
    .push(customerData)
    .then((res) => console.log("jobs send"))
    .catch((err) => console.log("something went wrong jobs !!!"));

  //Changing Order status
  let orderData = customer;
  orderData.status = "ongoing";
  db.ref()
    .child("orders")
    .child(customer.orderId)
    .update(orderData)
    .then((res) => console.log("Order states changed"))
    .catch((err) => console.log("something went wrong !!!"));
};
