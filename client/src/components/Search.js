const Search = ({getSearchResults,...props}) => {
  return (
    <div>
        <input
        className='search-field'
          type="text"
          value={props.term}
          onChange={(e) => {
            props.setTerm(e.target.value);
            getSearchResults(props.accessToken, props.term);
          }}
        />
    </div>
  );
};

export default Search;
