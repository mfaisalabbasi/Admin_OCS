import React, { Fragment } from "react";
import profile from "../../images/boy.jpg";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { onSubmittingOrder } from "../../store/action/login";

const NearestPartners = ({ data, order }) => {
  const dispatch = useDispatch();
  const onOrderSubmit = async () => {
    dispatch(onSubmittingOrder(order, data));
  };

  return (
    <div className='nearpartnerbox'>
      <div className='nearpartnerimg'>
        <img
          src={data && data.profileUrl ? data.profileUrl : profile}
          alt='pic'
          width='50%'
          height='60%'
          style={{ borderRadius: "100px" }}
        />
        <p>{data && data.name}</p>
      </div>
      <div className='nearpartnerinfo'>
        <Fragment>
          <div>
            <FaPhone size={18} color='green' />

            <h3> {data && data.phone}</h3>
            {data && data.expertise}
          </div>
        </Fragment>
      </div>
      <div className='nearpartnerinfo'>
        <div>
          <FaLocationArrow size={18} color='green' />
          <h3>Location</h3>
          {data && data.expertise}
        </div>
      </div>
      <div className='nearpartnerlast'>
        <div>
          <button className='nearpartnerbtn' onClick={() => onOrderSubmit()}>
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default NearestPartners;
