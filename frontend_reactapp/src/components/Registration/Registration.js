import './Registration.css';

const Registration = () => {
  return (
      <div className="register">
        <form action="">
            <ul className="signup-boxes">
                <li>
                    <label className="userLabel">Username:</label>
                    <input className="inputbox" type="text" title="Please enter your desired username." required placeholder="Enter a username."/>
                </li>
                <li>
                    <label className="passLabel">Password:</label>
                    <input className="inputbox" type="password" title="Please enter your desired password." required placeholder="Enter a password."/>
                </li>
                <li>
                    <button className="Submit" type="submit">Submit</button>
                </li>
            </ul>
        </form>
      </div>
  );
}

//SUBMIT BUTTON type = "submit" previously for validation, temporarily set to "button" to link to the other pages

export default Registration;
