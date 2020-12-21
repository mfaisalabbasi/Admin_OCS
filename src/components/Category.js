import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PartnerBox from "./sub/PartnerBox";

const Category = (props) => {
  const cat = props.match.params.cat;
  const parto = useSelector((state) => state.partner.partners);
  const [partners, setpartners] = useState(parto);

  useEffect(() => {
    const filterd = parto.filter(
      (partner) => partner.service === cat.toLowerCase()
    );
    setpartners(filterd);
  }, []);

  const [filterpartner, setfilterpartner] = useState(parto);
  const [inputValue, setInputValue] = useState("");
  const handleSearch = (e) => {
    setInputValue(e.target.value);
    const filterData = filterpartner.filter((item) => {
      return (
        item.phone &&
        item.phone.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    setpartners(filterData);
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
          {partners &&
            partners.map((custo) => (
              <PartnerBox dta={custo} key={custo.phone} cat={cat} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
