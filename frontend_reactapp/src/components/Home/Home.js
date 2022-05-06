import './Home.css';

//Home component handled by Paul; buttons and display by David

const Home = ({label}) => { 
    return (
        <div className="home">
            <h1>Get Your Rate of Fuel Today!</h1>   
            <div className="register">
                <button data-testid="button"><a href="/register" rel="noopener noreferrer">Sign Up{label}</a></button>
            </div>
        </div>
    );
}

export default Home;