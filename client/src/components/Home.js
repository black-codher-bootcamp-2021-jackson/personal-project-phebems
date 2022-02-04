import Nav from "./Nav";
import Track from "./Track";

const Home = ({reccomendations, ...props}) => {
    return (
        <div className="container">
            <Nav/>
            {reccomendations!= null ? reccomendations.map((track) => <Track key={track.id}track={track}/>): 'waiting'}  

        </div>
    )
}

export default Home;