import React from 'react';

const PetDetails = ({ currentPet }) => {
  const { name, species, breeds, age, gender, size, contact } = currentPet
  // console.log(currentPet)

  return (
    <div className='PetDetails'>
      <h1>{name}</h1>
      <div className='pet-details'>
        <ul>
          <li>Species: {species}</li>
          <li>Breed: { breeds.secondary !== null ? <span>{breeds.primary} / {breeds.secondary}</span> : <span>{breeds.primary}</span>}</li>
          <li>Age: {age}</li>
          <li>Gender: {gender}</li>
          <li>Size: {size}</li>
        </ul>
      </div>

      <div className='pet-contact'>
        <h3>Contact</h3>
        <ul>
          <li>Email: {contact.email}</li>
          { contact.phone && <li>Phone: {contact.phone}</li> }  
          <li>Location: {contact.address.city}, {contact.address.state} {contact.address.postcode}</li>
          <li>Country: {contact.address.country}</li>
        </ul>
      </div>
    </div>
  )
}

export default PetDetails;
