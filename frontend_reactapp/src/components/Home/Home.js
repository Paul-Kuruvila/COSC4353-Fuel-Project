import './Home.css';

//Home component handled by Paul

const Home = () => { 
    return (
        <div className="home">
            <h1>Get Your Rate of Fuel Today!</h1>   
            <div className="register">
                <button><a href="/register" rel="noopener noreferrer">Sign Up</a></button>
            </div>
        </div>
    );
}

export default Home;