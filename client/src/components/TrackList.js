import Track from './Track'
const TrackList = ({tracks}) => {
    return ( 
        <div className="trackList">
            <h2>Songs</h2>
        {tracks.length === 0 ? '...' : tracks.tracks.items.map((track) => (
          <Track key={track.id} track={track} />
        ))}
        </div>
     );
}
 
export default TrackList;