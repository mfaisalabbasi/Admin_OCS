import React from "react";
import { Link } from "react-router-dom";
import pic from "../../images/ocs.png";

const CatBox = ({ dta }) => {
  return (
    <Link to={`/dashboard/partners/${dta.name}`} className='boxcon'>
      <img
        src={dta.icon ? dta.icon : pic}
        width='100%'
        style={{ borderRadius: "2px" }}
        alt='catepic'
        height='70%'
      />
      <div
        style={{
          width: "100%",
          height: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#1b4f72",
        }}
      >
        {dta.name}{" "}
      </div>
    </Link>
  );
};

export default CatBox;
