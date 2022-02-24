import Artist from "./Artist";

function ArtistList({ artists, addArtist, ...props }) {
  return (
    <div className="artistList">
      <h2>Artists</h2>
      {artists.map((artist) => (
        <Artist key={artist.id} artist={artist} addArtist={addArtist} />
      ))}
    </div>
  );
}

export default ArtistList;
