import './Login.css';

const Login = () => {
  return (
      <div className="login">
        <form action="">
            <ul className="signup-boxes">
                <li>
                    <label className="userLabel">Username:</label>
                    <input className="inputbox" type="text" title="Please enter your username." required placeholder="Enter your username."/>
                </li>
                <li>
                    <label className="passLabel">Password:</label>
                    <input className="inputbox" type="password" title="Please enter your password." required placeholder="Enter your password."/>
                </li>
                <li>
                    <a href="/profile">
                        <button className="Submit" type="button">Login</button>
                    </a>
                </li>
                <div className="signup-text">
                    <p>Don't have an account?
                    <a href="/register">Sign up here</a>.</p>
                </div>
            </ul>
        </form>
      </div>
  );
}

//SUBMIT BUTTON type = "submit" previously for validation, temporarily set to "button" to link to the other pages

export default Login;
