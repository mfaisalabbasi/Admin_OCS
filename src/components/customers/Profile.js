import React, { Fragment, useEffect, useState } from "react";
import pic from "../../images/profile.png";
import moment from "moment";
import { db } from "../../index";
import { useAlert } from "react-alert";
const Profile = (props) => {
  const {
    name,
    phone,
    location,
    date,
    customerId,
    AccountStatus,
    verification,
    profileUrl,
  } = props.location.state;
  const [address, setaddress] = useState();
  useEffect(() => {
    const fetchNearby = async () => {
      const req = await fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=pk.6ae5458d22712d8adf1548f4610d6784&lat=${
          location && location.latitude
        }&lon=${location && location.longitude}&format=json`
      );

      const res = await req.json();
      setaddress(res.display_name);
    };
    fetchNearby();
  }, []);

  //------------------handling update

  const [user, setuser] = useState({
    Astatus: AccountStatus,
    veri: verification,
  });
  const { Astatus, veri } = user;
  const alert = useAlert();
  const handleUpdate = () => {
    const usr = {
      AccountStatus: Astatus,
      verification: veri,
    };
    db.ref()
      .child("customers")
      .child(customerId)
      .update(usr)
      .then((res) => alert.show("Customer updated"))
      .catch((err) => alert.show("something went wrong !!!"));
  };
  return (
    <Fragment>
      <div
        style={{
          width: "80%",
          backgroundColor: "#ffffff",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "20px",
        }}
      >
        <div className='profile'>
          <img
            src={profileUrl ? profileUrl : pic}
            alt={pic}
            width='100%'
            height='100%'
          />
        </div>
        <div className='data'>
          <div className='info'>
            <input
              type='text'
              defaultValue={name && name}
              name='name'
              className='update'
            />
            <input
              type='text'
              defaultValue={phone && phone}
              name='phone'
              className='update'
            />
            <input
              type='text'
              defaultValue={
                date ? moment(date).format("MMMM Do YYYY, h:mm:ss a") : "Date"
              }
              name='date'
              className='update'
            />
            <input
              type='text'
              defaultValue={address && address}
              className='update'
              name='location'
            />
            <input
              type='text'
              value={veri}
              name='verification'
              onChange={(e) => setuser({ ...user, veri: e.target.value })}
              className='update'
            />
            <input
              type='text'
              value={Astatus}
              name='accountstatus'
              onChange={(e) => setuser({ ...user, Astatus: e.target.value })}
              className='update'
            />
            <input
              type='text'
              defaultValue={customerId && customerId}
              className='update'
            />
          </div>
          <button className='btn' onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
