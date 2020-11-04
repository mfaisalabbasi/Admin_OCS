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
import Profile from './sub/Profile';
import PartnerProfile from './sub/PartnerProfile';
const Content = () => {
    return (
        <Fragment>
          <PrivateRoute path="/dashboard" component={Landing} exact/>
          <PrivateRoute path="/dashboard/customers" component={withRouter(Customers)} exact />
          <PrivateRoute path="/dashboard/customers/:id" component={withRouter(Profile)} />
          <PrivateRoute path="/dashboard/partners" component={withRouter(Partners)} exact  />
          <PrivateRoute path="/dashboard/partners/:cat" component={withRouter(Category)} exact/>
          <PrivateRoute path="/dashboard/partners/:cat/:id" component={withRouter(PartnerProfile)} />
          <PrivateRoute path="/dashboard/logout" component={withRouter(Logout)}  />
        </Fragment>
           
    )
}

export default Content
