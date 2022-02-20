const Track = ({ track, ...props }) => {
  const {
    id,
    name,
    artists,
    album: { images },
    preview_url,
  } = track;
  const getId = (trackId) => {
    console.log(trackId)
}
  return (
    <div className="track" onClick={()=> getId(id)}>
      <img src={images[2].url} alt="album artwork" />
      <div>
        <h3>{name}</h3>
        <p>
          {artists.length === 1
            ? artists[0].name
            : artists.map((artist) => artist.name).join(", ")}
        </p>

        {preview_url ? (
          <a href={preview_url}>preview</a>
        ) : (
          "preview unavailable"
        )}
      </div>
    </div>
  );
};

export default Track;
