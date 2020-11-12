import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPets, fetchType } from "../../adapters/PetsAdapter";
// import PetCard from "../components/PetCard";
import Pagination from "../layout/Pagination";
import PetCards from '../pets/PetCards';

const SearchPage = ({ fetchPets, fetchType, type, pets, loading }) => {
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (type) {
      if (type.charAt(type.length - 1) !== "s") {
        fetchType(type, page);
      } else {
        fetchType(type.slice(0, type.length - 1), page);
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

  // if (loading) {
  //   return (
  //     <div className="PetsContainer">
  //       <h1>Finding Pets...</h1>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="PetsContainer">
  //       <h1>Pets For Adoption Near You</h1>
  //       <div className="pet-cards">
  //         {pets &&
  //           pets.map((pet) => {
  //             return <PetCard key={pet.id} pet={pet} />;
  //           })}
  //       </div>

  //       <PageNav
  //         previousPage={previousPage}
  //         nextPage={nextPage}
  //         page={page}
  //       />
  //     </div>
  //   );
  // }

  return (
    <>
      <PetCards type={type}/>
      <Pagination previousPage={previousPage} nextPage={nextPage} page={page} />
    </>
  )
}

const mapStateToProps = ({ petfinder }) => ({
  pets: petfinder.pets,
  loading: petfinder.loading,
});

export default connect(mapStateToProps, { fetchPets, fetchType })(
  SearchPage
);
