import React from 'react';

const SearchBar = props => {
  return (
    <div>

      <strong>Sort by: </strong>
      <label>
        <input
          type="radio"
          value="None"
          checked={ props.sortBy === 'None' }
          onChange={ event => props.updateSortBy( event.target.value) }/>
        None 
      </label>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={props.sortBy === 'Alphabetically'}
          onChange={ event => props.updateSortBy( event.target.value) }/>
        Alphabetically 
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={props.sortBy === 'Price'}
          onChange={ event => props.updateSortBy( event.target.value) }/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={ event => props.updateFilterBy( event.target.value ) }>
          <option value="None">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
