import Track from './Track'
const TrackList = ({tracks, getId, ...props}) => {
    return ( 
        <div className="trackList">
            <h2>Songs</h2>
        {tracks?.map((track) => (
          <Track key={track.id} track={track} getId={getId} {...props}/>
        ))}
        </div>
     );
}
 
export default TrackList;