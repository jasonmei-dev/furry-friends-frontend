import React from 'react';

const PetDetails = ({ currentPet }) => {
  const { name, species, breeds, age, gender, size, status, contact, photos } = currentPet
  let imgUrl

  photos.length === 0 ? imgUrl = "" : imgUrl = photos[0].medium
  console.log(currentPet)

  return (
    <div className='PetDetails'>
      <div className='pet-image-container'>
        {photos.map(photo => {
          return <img className='pet-image' alt={name} src={photo.medium}></img>
        })}
      </div>

      <h1>{name}</h1>
      <ul>
        <li>Species: {species}</li>
        <li>Breed: { breeds.secondary !== null ? <span>{breeds.primary} / {breeds.secondary}</span> : <span>{breeds.primary}</span>}</li>
        <li>Age: {age}</li>
        <li>Gender: {gender}</li>
        <li>Size: {size}</li>
        <li>Status: {status}</li>
      </ul>

      <div className='pet-contact'>
        <h3>Contact</h3>
        <ul>
          <li>Email: {contact.email}</li>
          <li>Phone: {contact.phone}</li>
          <li>Location: {contact.address.city}, {contact.address.state} {contact.address.postcode}</li>
          <li>Country: {contact.address.country}</li>
        </ul>
      </div>
    </div>
  )
}

export default PetDetails;
