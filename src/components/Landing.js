import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCustomers, fetchOrders } from "../store/action/login";
import { fetchPartners } from "../store/action/login";

const Landing = () => {
  const customers = useSelector((state) => state.customer.customers);
  const [vericust, setvericust] = useState(null);
  const [verifiedPartner, setverifiedPartner] = useState(null);

  const parto = useSelector((state) => state.partner.partners);
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers());
    dispatch(fetchOrders());
    const checkVeri =
      customers &&
      customers.filter((custo) => custo.verification === "verified");
    setvericust(checkVeri && checkVeri.length);

    // partner
    const filterPart =
      parto && parto.filter((item) => item.verification === "verified");
    setverifiedPartner(filterPart && filterPart.length);
  }, [parto, orders]);

  useEffect(() => {
    dispatch(fetchPartners());
  }, []);
  return (
    <div className='img'>
      <div className='mainCon'>
        <div className='adminBoxCon'>
          <button className='adminBox'>
            <Link to='/dashboard/orders' className='BoxTxt'>
              Orders :- {orders && orders.length}
            </Link>
          </button>
          <button className='adminBox'>
            Pending:-{" "}
            {orders &&
              orders.filter((order) => order.status === "pending").length}
          </button>
          <button className='adminBox'>
            Completed:-{" "}
            {orders &&
              orders.filter((order) => order.status === "completed").length}
          </button>
          <button className='adminBox'>
            <Link to='/dashboard/partners' className='BoxTxt'>
              Partners
            </Link>
          </button>
          <button className='adminBox'>Total:- {parto && parto.length}</button>
          <button className='adminBox'>
            Verified:- {parto && verifiedPartner}
          </button>
          <button className='adminBox'>
            <Link to='/dashboard/customers' className='BoxTxt'>
              Customers
            </Link>
          </button>
          <button className='adminBox'>
            Total:- {customers && customers.length}
          </button>
          <button className='adminBox'>
            Verified:- {vericust && vericust}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
