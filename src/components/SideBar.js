import React from "react";
import {
  FaHandshake,
  FaChartPie,
  FaSignOutAlt,
  FaUsers,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <ul>
      <li>
        <Link to='/dashboard'>
          <FaChartPie size={16} /> Dashboard
        </Link>
      </li>
      <li>
        <Link to='/dashboard/orders'>
          <FaShoppingCart size={15} /> Orders
        </Link>
      </li>

      <li>
        <Link to='/dashboard/partners'>
          <FaHandshake size={16} /> Partners
        </Link>
      </li>
      <li>
        <Link to='/dashboard/customers'>
          <FaUsers size={16} /> Customers
        </Link>
      </li>
      <li>
        <Link to='/dashboard/logout'>
          <FaSignOutAlt size={16} /> Logout
        </Link>
      </li>
    </ul>
  );
};

export default SideBar;
