import React from "react";
import PetsContainer from "../containers/PetsContainer";
// import Footer from "./Footer";

const SearchPage = ({ type }) => {
  return (
    <div className="SearchPage">
      <div className="cards container">
        <PetsContainer key={type} type={type} />
      </div>
    </div>
  );
};

export default SearchPage;
