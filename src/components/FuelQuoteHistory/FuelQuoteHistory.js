const FuelQuoteHistory = () => {
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
            <th>Delievered Address</th>
            <th>Delievered Date</th>
            <th>Price</th>
            <th>Total Amount Due</th>
        </tr>
    </table>
    </div>
    );
}



export default FuelQuoteHistory;