const Profile = () => {
  return (
      <div classNameName="profile">
        <header id="navbar">
                <h1 className="title"><a href="/">Fuel.io</a></h1>
                <nav>
                    <ul className="options">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/fuelquoteform">Fuel Quote</a></li>
                        <li><a href="https://github.com/Paul-Kuruvila/COSC4353-Fuel-Project" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                    </ul>
                </nav>
            </header>
            <form action="">
                <ul className="signup-boxes">
                    <li>
                        <label className="">Full Name</label>
                        <input className="inputbox" type="text" required placeholder="Enter your first and last name."/>
                    </li>
                    <li>
                        <label>Address 1</label>
                        <input className="inputbox" type="text" required placeholder="Enter your address."/>
                    </li>
                    <li>
                        <label>Address 2</label>
                        <input className="inputbox" type="text" placeholder="Enter your address, if applicable."/>
                    </li>
                    <li>
                        <label>City</label>
                        <input className="inputbox" type="text" required placeholder="Enter the name of your city."/>
                    </li>
                    <li>
                        <label>State</label>
                        <select className="inputbox" id="state" name="state">
                            <option value="" selected>Select a state</option>
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AR">AR</option>    
                            <option value="AZ">AZ</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DC">DC</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="IA">IA</option>    
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="MA">MA</option>
                            <option value="MD">MD</option>
                            <option value="ME">ME</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MO">MO</option>    
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="NC">NC</option>    
                            <option value="NE">NE</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>            
                            <option value="NV">NV</option>
                            <option value="NY">NY</option>
                            <option value="ND">ND</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WI">WI</option>    
                            <option value="WV">WV</option>
                            <option value="WY">WY</option>
                        </select>
                    </li>
                    <li>
                        <label>Zipcode</label>
                        <input className="inputbox" type="text" required placeholder="Enter your zipcode."/>
                    </li>
                    <li>
                        <button className="Submit" type="submit">Save</button>
                    </li>
                </ul>
            </form>
      </div>
  );
}

export default Profile;
