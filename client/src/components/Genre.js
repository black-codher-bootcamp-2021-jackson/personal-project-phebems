const Genre = ({ genre, ...props }) => {
    const {
        _id,
      name,
    } = genre;
    const getId = (id) => {
      console.log(id)
  }
    return (
      <div className="genre" onClick={()=> getId(_id)}>
        <div>
          <h3>{name}</h3>
        </div>
      </div>
    );
  };
  
  export default Genre;
  