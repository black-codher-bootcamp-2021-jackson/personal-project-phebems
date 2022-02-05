import Nav from "./Nav";
import Track from "./Track";

const Home = ({reccomendations, ...props}) => {
    return (
        <div className="container">
            <Nav/>
            {reccomendations.map((track) => <Track key={track.id}track={track}/>)}  

        </div>
    )
}

export default Home;