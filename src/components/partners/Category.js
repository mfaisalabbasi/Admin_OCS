import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterdPartners, searchFunc } from "../../store/action/login";
import PartnerBox from "./PartnerBox";

const Category = (props) => {
  const cat = props.match.params.cat;
  const parto = useSelector((state) => state.partner.filters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterdPartners(cat));
  }, [cat]);

  const [inputValue, setInputValue] = useState("");
  const handleSearch = (e) => {
    setInputValue(e.target.value);
    dispatch(searchFunc(inputValue, cat));
  };

  return (
    <div className='container'>
      <div className='section'>
        <div className='searchCon'>
          <input
            className='search'
            type='text'
            value={inputValue}
            onChange={handleSearch}
            placeholder='Search Customer'
          />
          <button className='btn'>Search</button>
        </div>
        <div className='userCon'>
          {parto &&
            parto.map((custo) => (
              <PartnerBox dta={custo} key={custo.partnerKey} cat={cat} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
