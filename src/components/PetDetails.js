import React from "react";

const PetDetails = ({ currentPet }) => {
  const { name, species, breeds, age, gender, size, contact } = currentPet;
  // console.log(currentPet)

  return (
    <div className="PetDetails">
      <div className="pet-info">
        <h1>{name}</h1>
        <ul>
          <li>
            <strong>Species:</strong> {species}
          </li>
          <li>
            <strong>Breed:</strong>{" "}
            {breeds.secondary !== null ? (
              <span>
                {breeds.primary} / {breeds.secondary}
              </span>
            ) : (
              <span>{breeds.primary}</span>
            )}
          </li>
          <li>
            <strong>Age:</strong> {age}
          </li>
          <li>
            <strong>Gender:</strong> {gender}
          </li>
          <li>
            <strong>Size:</strong> {size}
          </li>
        </ul>
      </div>

      <div className="pet-contact">
        <h3>Contact</h3>
        <ul>
          <li>
            <strong>Email:</strong> {contact.email}
          </li>
          {contact.phone && (
            <li>
              <strong>Phone:</strong> {contact.phone}
            </li>
          )}
          <li>
            <strong>Location:</strong> {contact.address.city},{" "}
            {contact.address.state} {contact.address.postcode}
          </li>
          <li>
            <strong>Country:</strong> {contact.address.country}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PetDetails;
