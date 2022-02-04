const Track = ({ track, ...props }) => {
  const {
    id,
    name,
    artists,
    album: {images},
    preview_url,
  } = track;
  return <div>
      <img src ={images[2].url} alt='album artwork'/>
      <p>{name}</p>
      <p>{artists[0] ? artists[0].name : artists[0].name}</p>
      
      {preview_url ? <a href={preview_url}>play</a>: 'preview unavailable'}
  </div>;
};

export default Track;
