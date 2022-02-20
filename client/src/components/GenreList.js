import Genre from "./Genre";
const GenreList = ({ genres }) => {
  return (
    <div className="genreList">
      <h2>Genres</h2>
      {genres.map((genre) => (
        <Genre key={genre._id} genre={genre} />
      ))}
    </div>
  );
};

export default GenreList;
