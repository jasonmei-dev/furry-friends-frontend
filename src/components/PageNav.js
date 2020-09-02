import React from "react";

const PageNav = ({ previousPage, nextPage, page }) => {
  return (
    <div className="PageNav">
      <div className="flex-item">
        <i
          className="arrow fas fa-chevron-circle-left fa-2x"
          onClick={previousPage}
        ></i>
      </div>
      <div className="flex-item">
        <p>Page: {page}</p>
      </div>
      <div className="flex-item">
        <i
          className="arrow fas fa-chevron-circle-right fa-2x"
          onClick={nextPage}
        ></i>
      </div>
    </div>
  );
};

export default PageNav;
