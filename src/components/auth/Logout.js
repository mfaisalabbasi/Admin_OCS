import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LogoutFun } from "../../store/action/login";

const Logout = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(LogoutFun());
    history.push("/login");
  };
  return (
    <div className='logout'>
      <div className='sublog'>
        <div className='form'>
          <h4 className='txtl'> Are you sure to logout ???</h4>
          <button className='logbtn' onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
