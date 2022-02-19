const Track = ({ track, ...props }) => {
  const {
    id,
    name,
    artists,
    album: { images },
    preview_url,
  } = track;
  return (
    <div className="track">
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
