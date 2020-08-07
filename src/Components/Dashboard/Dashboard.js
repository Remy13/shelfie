import React from 'react';
import Product from "../Product/Product";
import "./Dashboard.css";

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Product/>
            </div>
        )
    }
}



