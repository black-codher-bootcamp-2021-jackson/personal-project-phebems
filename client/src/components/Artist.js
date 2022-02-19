function Artist({artist}) {
    const {id, images,name} = artist
    return (
        <div className="artist">
      {images[2]? <img src={images[2].url} alt={name + 'profile picture'} /> : <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png"/>}
      <div>
        <h3>{name}</h3>
      </div>
    </div>
    );
}

export default Artist;