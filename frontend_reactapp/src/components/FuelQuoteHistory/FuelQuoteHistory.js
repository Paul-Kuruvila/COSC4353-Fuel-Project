import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

const FuelQuoteHistory = () => {
    /*const history = useHistory();

    const [request, setRequest] = useState();
    const [date, setDate] = useState();
    const [price, setPrice] = useState('1.50');
    var [cost, setCost] = useState();

    var [fullname, setName] = useState();
    var [address, setAddress] = useState();
    var [address2, setAddress2] = useState();
    var [City, setCity] = useState();
    var [State, setState] = useState();
    var [Zipcode, setZipcode] = useState();

    const [backendData, setBackendData] = useState([{}]);

    async function backend() {
    const response = await fetch('/fuelquote')
    const jsonData = await response.json();
    //console.log(jsonData.address);
    setName(jsonData[0].fullname);
    setAddress(jsonData[0].address);
    setAddress2 (jsonData[0].address2);
    setCity(jsonData[0].city);
    setState(jsonData[0].state);
    setZipcode(jsonData[0].zipcode);

    const clientData = {address, address2, City, State, Zipcode};
    //console.log(jsonData);
    console.log(clientData); // data from db->backend->frontend(here)
  }

  backend();*/

    return (
        <div className="fuelquotehistory">
            <nav>
                    <ul className="options">
                        <li><a href="/fuelquoteform">Fuel Quote Transactions</a></li>
                    </ul>
            </nav>
        <table border ="5" id ="show">
        <tr>
            <th>Gallons Requested</th>
            <th>Delivered Date</th>
            <th>Delivered Address</th>
            <th>Price</th>
            <th>Total Amount Due</th>
        </tr>
    </table>
    </div>
    );
}



export default FuelQuoteHistory;