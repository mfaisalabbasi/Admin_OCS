import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import profile from "../../images/profile.png";
import moment from "moment";

const CustomerBox = (props) => {
  return (
    <Fragment>
      <Link
        dta={props.dta}
        to={{
          pathname: `/dashboard/customers/${props.dta.phone}`,
          state: props.dta,
        }}
      >
        <div className='user'>
          <div className='pic'>
            <img
              src={props.dta.profileUrl ? props.dta.profileUrl : profile}
              alt='imag'
              width='40%'
              height='90%'
              style={{ borderRadius: "50px" }}
            />
          </div>
          <div className='email'>
            <div className='txt' style={{ color: "#1b4f72" }}>
              <h4>{props.dta.name}</h4>
              <h5>{props.dta.phone}</h5>
            </div>
          </div>
          <div className='email'>
            <div className='txt' style={{ color: "#1b4f72" }}>
              {props.dta &&
                moment(props.dta.date).format("MMMM Do YYYY, h:mm:ss a")}
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default CustomerBox;
