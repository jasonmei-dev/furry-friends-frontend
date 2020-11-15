import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPets, fetchType } from "../../adapters/PetsAdapter";
import Pagination from "../layout/Pagination";
import PetCards from '../pets/PetCards';

const SearchPage = ({ fetchPets, fetchType, type }) => {
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (type) {
      setPage(1)
      if (type.charAt(type.length - 1) !== "s") {
        fetchType(type);
      } else {
        fetchType(type.slice(0, type.length - 1));
      }
    } else {
      fetchPets(page);
    }
    // eslint-disable-next-line
  }, [type])

  const nextPage = () => {
    let nextPage = page;
    nextPage++;

    if (type) {
      if (type.charAt(type.length - 1) !== "s") {
        setPage(nextPage)
        fetchType(type, nextPage)
      } else {
        setPage(nextPage)
        fetchType(type.slice(0, type.length - 1), nextPage)
      }
    } else {
      setPage(nextPage)
      fetchPets(nextPage)
    }
  };

  const previousPage = () => {
    let currentPage = page;
    let previousPage = currentPage--;

    if (previousPage <= 1) {
      alert("Unable to go back");
    } else {
      if (type) {
        if (type.charAt(type.length - 1) !== "s") {
          setPage(previousPage - 1)
          fetchType(type, previousPage - 1)
        } else {
          setPage(previousPage - 1)
          fetchType(type.slice(0, type.length - 1), previousPage - 1)
        }
      } else {
        setPage(previousPage - 1)
        fetchPets(previousPage - 1)
      }
    }
  };

  return (
    <div className="SearchPage">
      <PetCards type={type}/>
      <Pagination previousPage={previousPage} nextPage={nextPage} page={page} />
    </div>
  )
}

const mapStateToProps = ({ petfinder }) => ({
  pets: petfinder.pets,
  loading: petfinder.loading,
});

export default connect(mapStateToProps, { fetchPets, fetchType })(
  SearchPage
);
