import React from "react";
import { useSelector } from "react-redux";
import Box from "./Box";

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <div className='container'>
      <div className='orderWrap'>
        <div className='titleBarStatic'>
          <div className='bxStatic'>Name</div>
          <div className='bxStatic' style={{ width: "40%" }}>
            Address
          </div>
          <div className='bxStatic'>Date</div>
          <div className='bxStatic' style={{ width: "10%" }}>
            Status
          </div>
        </div>
        {orders &&
          orders.map((order) => <Box data={order} key={order.orderDate} />)}
      </div>
    </div>
  );
};

export default Orders;
