const Track = ({ track, getId, addTrack }) => {
  const {
    id,
    name,
    artists,
    album: { images },
    preview_url,
  } = track;

  return (
    <div className="track" onClick={() => {addTrack(id)}}>
      <img src={images[2].url} alt="album artwork" />
      <div>
        <h3>{name}</h3>
        <p>
          {artists.length === 1
            ? artists[0].name
            : artists.map((artist) => artist.name).join(", ")}
        </p>

        {preview_url ? (
          <audio controls='controls' src={preview_url}>preview</audio>
        ) : (
          "preview unavailable"
        )}
      </div>
    </div>
  );
};

export default Track;
