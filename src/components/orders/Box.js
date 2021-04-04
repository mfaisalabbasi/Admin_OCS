import React, { useState, useEffect } from "react";
import profile from "../../images/boy.jpg";
import moment from "moment";
import { Link } from "react-router-dom";

const Box = (props) => {
  const [address, setaddress] = useState();
  useEffect(() => {
    const fetchNearby = async () => {
      const req = await fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=pk.6ae5458d22712d8adf1548f4610d6784&lat=${
          props.data.location && props.data.location.latitude
        }&lon=${
          props.data.location && props.data.location.longitude
        }&format=json`
      );

      const res = await req.json();
      setaddress(res.display_name);
    };
    fetchNearby();
  }, []);

  return (
    <Link
      className='titleBar'
      to={{
        pathname: `/dashboard/orders/${props.data.phone}`,
        state: props.data,
      }}
    >
      <div className='bx'>
        <div className='orderPic'>
          <img
            src={props.data.profileUrl ? props.data.profileUrl : profile}
            className='orderImg'
            alt='pic'
          />
        </div>
        <div className='orderName'>{props.data.name}</div>
      </div>
      <div className='bx' style={{ width: "30%" }}>
        {address && address}
      </div>
      <div
        className='bx'
        style={{ width: "10%", color: "#152375", textAlign: "center" }}
      >
        {props.data.service}
      </div>
      <div className='bx'>
        {props.data.orderDate
          ? moment(props.data.orderDate).format("MMMM Do YYYY, h:mm:ss a")
          : "Date"}
      </div>
      <div
        className='bx'
        style={{
          backgroundColor:
            props.data.status === "pending"
              ? "#EC7063"
              : props.data.status === "completed"
              ? "#17A589"
              : "blue",
          fontWeight: "bold",
          width: "10%",
          borderRadius: "5px",
          fontSize: "15px",
          color: "#EBEDEF",
        }}
      >
        {props.data && props.data.status}
      </div>
    </Link>
  );
};

export default Box;
