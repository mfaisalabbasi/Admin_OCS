import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Customers from "./customers/Customers";
import Partners from "./partners/Partners";
import Logout from "./auth/Logout";
import Landing from "./Landing";
import Category from "./partners/Category";
import PrivateRoute from "./auth/PrivateRoute";
import Profile from "./customers/Profile";
import PartnerProfile from "./partners/PartnerProfile";
import Orders from "./orders/Orders";
import OrderProfile from "./orders/OrderProfile";
const Content = () => {
  return (
    <Fragment>
      <PrivateRoute path='/dashboard' component={Landing} exact />
      <PrivateRoute
        path='/dashboard/orders'
        component={withRouter(Orders)}
        exact
      />
      <PrivateRoute
        path='/dashboard/orders/:id'
        component={withRouter(OrderProfile)}
      />
      <PrivateRoute
        path='/dashboard/customers'
        component={withRouter(Customers)}
        exact
      />
      <PrivateRoute
        path='/dashboard/customers/:id'
        component={withRouter(Profile)}
      />
      <PrivateRoute
        path='/dashboard/partners'
        component={withRouter(Partners)}
        exact
      />
      <PrivateRoute
        path='/dashboard/partners/:cat'
        component={withRouter(Category)}
        exact
      />
      <PrivateRoute
        path='/dashboard/partners/:cat/:id'
        component={withRouter(PartnerProfile)}
        exact
      />
      <PrivateRoute path='/dashboard/logout' component={withRouter(Logout)} />
    </Fragment>
  );
};

export default Content;
