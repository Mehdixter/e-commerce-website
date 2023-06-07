import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import '../AdminApp.css';
import { useState  , useEffect } from "react";
import { NavLink } from 'react-router-dom';

export default function Comment(){

    const [data , setData] = useState(
    [
        {
            "idComment":"1",
            "Label":"Comment",
            "Product":"ProductName",
            "Customer":"name1",
        },
        {
            "idComment":"2",
            "Label":"Comment",
            "Product":"ProductName",
            "Customer":"name2"
        },
        {
            "idComment":"3",
            "Label":"Comment",
            "Product":"ProductName",
            "Customer":"name3"
        },
        
    ]
    )
    
    return(
        
        <div className="container">
            
            <div className="row">
                <div>
                    <h1>Comments List</h1>
                    <hr />
                   
                </div>
                
                <div className="input-group mb-3">
                
                    <select name="" id="select">
                        <option value="DateOrder">Date</option>
                        <option value="idOrder">Order ID</option>
                        <option value="idCustomer">Customer ID</option>
                        <option value="Status">Status</option>
                    </select>
                    <input type="text" name="" id="filter" placeholder=' Enter ....'/>
                    <button class="btn btn-outline-primary" type="button" id='filterBtn'>Button</button>
                </div>
            <div>
            <br />
                <table className="table table-sm table-bordered" >
                    <thead>
                        <th><a href="">tout</a></th>
                        <th >Id </th>
                        <th >Label</th>
                        <th >Product</th>
                        <th>Customer</th>
                        <th>Actions</th>
                    </thead>
                    {
                        data && data.map((obj) =>(
                           <List data={obj} /> 
                        ))
                    }
                </table>
                &nbsp;<input type="checkbox" name="cc" id="cc" />&nbsp;
                    <label htmlFor="cc"> tout</label>&nbsp;&nbsp;
                    <button type="button" class="btn btn-danger">Delete</button>
            </div>
            </div>
        </div>
    )
}

const List = (props) => {
    return (
            <tr>
                <td><input type="checkbox" /></td>
                <td>{props.data.idComment}</td>
                <td>{props.data.Label}</td>
                <td>{props.data.Product}</td>
                <td>{props.data.Customer}</td>
                <td>
                <NavLink  to="/commentView" className="btn btn-outline-success">View</NavLink>&nbsp;
                <button  className="btn btn-outline-danger" id='btn'>Delete</button>&nbsp;
                    
                </td>
            </tr>
    );
};

