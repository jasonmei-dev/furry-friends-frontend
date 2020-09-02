import React from "react";
import PetsContainer from "../containers/PetsContainer";

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
