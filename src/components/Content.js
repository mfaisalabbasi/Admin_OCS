import React, { Fragment } from 'react'
import {
   withRouter
  } from "react-router-dom";
  import Customers from './Customers';
  import Partners from './Partners';
  import Logout from './Logout';
import Landing from './Landing';
import Category from './Category';
import PrivateRoute from './PrivateRoute';
const Content = () => {
    return (
        <Fragment>
          <PrivateRoute path="/dashboard" component={Landing} exact/>
          <PrivateRoute path="/dashboard/customers" component={withRouter(Customers)} />
          <PrivateRoute path="/dashboard/partners" component={withRouter(Partners)}  />
          <PrivateRoute path="/dashboard/logout" component={withRouter(Logout)}  />
          <PrivateRoute path="/dashboard/partners/id" component={withRouter(Category)} />

        </Fragment>
           
    )
}

export default Content
