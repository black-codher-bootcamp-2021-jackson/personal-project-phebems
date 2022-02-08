import { useState, useEffect } from 'react';

const Search = ({getSearchResults,...props}) => {
    
  const handleSubmit = (event) => {
    event.preventDefault();
    getSearchResults(props.accessToken, props.term)
  };

  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={props.term}
          onChange={(e) => {
            props.setTerm(e.target.value);
          }}
        />
        <p style={{ color: "red" }}>
          <em>{props.term && "Terms Typed: " + props.term}</em>
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Search;
