import Track from "./Track";
const TrackList = ({ tracks, getId, addTrack, ...props }) => {
  return (
    <div className="trackList">
      {tracks?.map((track) => (
        <Track
          key={track.id}
          track={track}
          addTrack={addTrack}
          getId={getId}
          {...props}
        />
      ))}
    </div>
  );
};

export default TrackList;
