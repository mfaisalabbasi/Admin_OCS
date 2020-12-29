import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/action/login";

import CatBox from "./CatBox";
const Partners = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const categories = useSelector((state) => state.category.categories);
  return (
    <div className='container' style={{ backgroundColor: "#FFFFFF" }}>
      <div className='boxCon'>
        {categories &&
          categories.map((cat) => <CatBox key={cat.icon} dta={cat} />)}
      </div>
    </div>
  );
};

export default Partners;
