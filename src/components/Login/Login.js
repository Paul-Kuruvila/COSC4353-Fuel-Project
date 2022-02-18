const Login = () => {
  return (
      <div className="login">
        <header id="navbar">
        <h1 className="title"><a href="/">Fuel.io</a></h1>
        <nav>
            <ul className="options">
                <li><a href="/login">Login</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="https://github.com/Paul-Kuruvila/COSC4353-Fuel-Project" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
            </ul>
        </nav>
        </header>
        <form action="">
            <ul className="signup-boxes">
                <li>
                    <label className="">Username:</label>
                    <input className="inputbox" type="text" title="Please enter your username." required placeholder="Enter your username."/>
                </li>
                <li>
                    <label>Password:</label>
                    <input className="inputbox" type="password" title="Please enter your password." required placeholder="Enter your password."/>
                </li>
                <li>
                    <button className="Submit" type="submit">Login</button>
                </li>
                <div className="signup-text">
                    <p>Don't have an account?
                    <a href="/signup">Sign up here</a>.</p>
                </div>
            </ul>
        </form>
      </div>
  );
}

export default Login;
