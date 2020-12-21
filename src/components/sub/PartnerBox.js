import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import profile from "../../images/profile.png";
const PartnerBox = (props) => {
  let { url } = useRouteMatch();
  return (
    <Link
      dta={props.dta}
      to={{ pathname: `${url}/${props.dta.phone}`, state: props.dta }}
    >
      <div className='user'>
        <div className='pic'>
          <img
            src={props.dta.profileUrl ? props.dta.profileUrl : profile}
            alt='imag'
            width='100%'
            height='100%'
          />
        </div>
        <div className='email'>
          <div className='txt' style={{ color: "#1b4f72" }}>
            <h4>{props.dta.name}</h4>
            <h5>{props.dta.phone}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PartnerBox;
