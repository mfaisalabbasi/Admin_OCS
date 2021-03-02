import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../store/action/login";
import CustomerBox from "./CustomerBox";
const Customers = () => {
  const custo = useSelector((state) => state.customer.customers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);

  const [customers, setcustomers] = useState(custo);
  const [filtercustomer, setfiltercustomer] = useState(custo);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    setInputValue(e.target.value);
    const filterData = filtercustomer.filter((item) => {
      return (
        item.phone &&
        item.phone.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    setcustomers(filterData);
  };
  return (
    <div className='container'>
      <div className='section'>
        <div className='searchCon'>
          <input
            className='search'
            type='text'
            onChange={handleSearch}
            value={inputValue}
            placeholder='Search Customer'
          />
          {/* <button className='btn'>Search</button> */}
        </div>
        <div className='userCon'>
          {customers &&
            customers.map((custo) => (
              <CustomerBox dta={custo} key={custo.date} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
