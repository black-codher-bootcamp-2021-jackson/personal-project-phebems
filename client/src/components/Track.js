const Track = ({ track, getId, addTrack }) => {
  const {
    id,
    name,
    artists,
    album: { images },
    preview_url,
  } = track;

  return (
    <div
      className="track"
      onClick={() => {
        addTrack(id);
      }}
    >
      {images[2] ? (
        <img src={images[2].url} alt={name + "artwork"} className='artwork'/>
      ) : (
        <img
          src="https://www.flaticon.com/premium-icon/music_2342212"
          alt="album artwork"
          className='artwork'
        />
      )}
      <div className='info'>
        <h3>{name}</h3>
        <p>
          {artists.length === 1
            ? artists[0].name
            : artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>
      <div className='preview'>
          {preview_url ? (
            <audio controls="controls" src={preview_url}>
              preview
            </audio>
          ) : (
            "preview unavailable"
          )}
        </div>
    </div>
  );
};

export default Track;
