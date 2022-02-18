const Registration = () => {
  return (
      <div classNameName="register">
        <header id="navbar">
            <h1 class="title"><a href="/">Fuel.io</a></h1>
            <nav>
                <ul class="options">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="https://github.com/Paul-Kuruvila/COSC4353-Fuel-Project" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></li>
                </ul>
            </nav>
        </header>
        <form action="">
            <ul class="signup-boxes">
                <li>
                    <label class="">Username:</label>
                    <input class="inputbox" type="text" title="Please enter your desired username." required placeholder="Enter a username."/>
                </li>
                <li>
                    <label>Password:</label>
                    <input class="inputbox" type="password" title="Please enter your desired password." required placeholder="Enter a password."/>
                </li>
                <li>
                    <button class="Submit" type="submit">Submit</button>
                </li>
            </ul>
        </form>
      </div>
  );
}

export default Registration;
