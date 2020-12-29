import React, { useEffect } from "react";
import profile from "../../images/boy.jpg";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { nearestPartners } from "../../store/action/login";
import NearestPartners from "./NearestPartners";

const OrderProfile = (props) => {
  const {
    name,
    phone,
    profileUrl,
    status,
    date,
    customerId,
    orderDate,
  } = props.location.state;
  const partners = useSelector((state) => state.orders.nearestpartners);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(nearestPartners(props.location.state));
  }, []);
  return (
    <div className='container' style={{ marginTop: "-10px" }}>
      <div className='profileCustomer'>
        <div className='customerImage'>
          <img
            src={profileUrl ? profileUrl : profile}
            alt='pic'
            width='85%'
            height='85%'
            style={{ borderRadius: "100px" }}
          />
        </div>
        <div className='customerdata'>
          <div className='info'>
            <input
              type='text'
              defaultValue={name}
              name='name'
              className='infodata'
            />
            <input
              type='text'
              defaultValue={phone}
              className='infodata'
              name='phone'
            />
            <input
              type='text'
              defaultValue={customerId}
              name='customerId'
              className='infodata'
            />
          </div>
        </div>
      </div>
      <div className='nearPartner'>
        <div className='nearpartnertop'>
          <h5>
            Order Status :- {status.charAt(0).toUpperCase() + status.slice(1)}
          </h5>
          <h5>Availble Partners</h5>
          <h5>
            {orderDate
              ? moment(orderDate).format("MMMM Do YYYY, h:mm:ss a")
              : "Date"}{" "}
          </h5>
        </div>
        {partners &&
          partners.map((partner) => (
            <NearestPartners
              key={partner.partnerKey}
              data={partner}
              order={props.location.state}
            />
          ))}
      </div>
    </div>
  );
};

export default OrderProfile;
