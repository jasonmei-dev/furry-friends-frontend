import React from 'react';
import { connect } from 'react-redux';
import { fetchType, fetchPets } from '../adapters/PetsAdapter';

const FilterBar = ({ fetchType, fetchPets }) => {
  let types = ['Dog', 'Cat', 'Rabbit', 'Small & Furry', 'Horse', 'Bird', 'Scales, Fins & Other', 'Barnyard']

  const typeChange = event => {
    console.log(event.target.value)
    event.target.value === 'All' ? fetchPets() : fetchType(event.target.value);
  }

  return (
    <div className='FilterBar'>
      <label>Select Type: </label>
      <select onChange={typeChange}>
        <option key='All' value='All'>All</option>
        {types.map(type => {
          return <option key={type} value={type}>{type}</option>
        })}
      </select>
    </div>
  )
}

export default connect(null, { fetchType, fetchPets })(FilterBar);
