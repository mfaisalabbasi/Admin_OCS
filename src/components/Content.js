import React, { Fragment } from 'react'
import {
    Route,
   withRouter
  } from "react-router-dom";
  import Customers from './Customers';
  import Partners from './Partners';
  import Logout from './Logout';
import Landing from './Landing';
const Content = () => {
    return (
        <Fragment>
          <Route exact path="/home" component={Landing}/>
          <Route path="/home/customers" component={withRouter(Customers)}/>
          <Route path="/home/partners" component={withRouter(Partners)} />
          <Route path="/home/logout" component={withRouter(Logout)} />
        </Fragment>
           
    )
}

export default Content
