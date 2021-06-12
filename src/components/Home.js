import React from "react";
import { useHistory } from "react-router-dom";
import Background from "../images/bg.png";

const Home = () => {
  const history = useHistory();
  const handleRedirect = () => {
    history.push("/dashboard");
  };
  return (
    <div
    className='homestyle'
      style={{
        height:'100vh',
        backgroundImage: `url(${Background})`,
     
      }}
    >
      <button
        onClick={handleRedirect}
        className='homebtns'
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default Home;
