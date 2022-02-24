function Artist({ artist, addArtist }) {
  const { id, images, name } = artist;

  return (
    <div className="artist" onClick={() => addArtist(id)}>
      {images[2] ? (
        <img src={images[2].url} alt={name + "profile"} />
      ) : (
        <img
          src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
          alt="default avi"
        />
      )}
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default Artist;
