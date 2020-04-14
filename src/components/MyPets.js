import React from 'react';
import PetCard from './PetCard';

const MyPets = ({ myPets }) => {
  const petCards = myPets.map(pet => <PetCard key={pet.pet_api_id} petObject={pet}/>)
  return petCards
}

export default MyPets;
