import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

const FuelQuoteHistory = () => {
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

    var [data, setData] = useState([]); // array of arrays of all data (profile data and fuel quotes)
    console.log(data)
    const fuelQuoteData = async () => { //retrieving profile data from backend which is retrieved from database
        const response = await fetch('/fuelquotehist')
        const jsonData = await response.json();
        return(jsonData)
    }
    document.addEventListener("DOMContentLoaded", async () => { //set variables for visual rendering on page load
        let results;
        let delivery;
        try {
            results = await fuelQuoteData();
            setData(results);
            // setName(data[0].fullname);
            // setAddress(data.address);
            // if(data.address2 != "undefined")
            //     setAddress2(data.address2);
            // setCity(data.city);
            // setState(data.state);
            // setZipcode(data.zipcode);

            // setRequest(data.request);
            // setDate(data.date);
            // setPrice(data.price);
            // setCost(data.cost);
        } catch (e) {
            console.log("Error fetching profile data from backend");
            console.log(e);
        }
        //console.log(results);
    })

    return (
        <div className="fuelquotehistory">
            <nav>
                    <ul className="options">
                        <li><a href="/fuelquoteform">Fuel Quote Transactions</a></li>
                    </ul>
            </nav>
            <table class="table table-striped" border ="5">
                <thead>
                    <tr>
                        <th>Delivered Address</th>
                        <th>Gallons Requested</th>
                        <th>Delivered Date</th>
                        <th>Price</th>
                        <th>Total Amount Due</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => {
                        return (
                            <tr>
                                <td>{d.fullname}, {d.address} {d.address2}, {d.city}, {d.state}, {d.zipcode} </td>
                                <td>{d.request}</td>
                                <td>{d.date}</td>
                                <td>{d.price}</td>
                                <td>{d.cost}</td>
                            </tr> 
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}



export default FuelQuoteHistory;