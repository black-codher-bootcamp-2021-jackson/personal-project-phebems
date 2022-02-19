import Artist from './Artist';

function ArtistList({artists}) {
    return (
        <div className="artistList">
            <h2>Artists</h2>
        {artists.map((artist) => (<Artist key={artist.id} artist={artist} />))}
        </div>
    );
}

export default ArtistList;