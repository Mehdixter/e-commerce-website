import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useState  , useEffect } from "react";
import { NavLink } from 'react-router-dom';

export default function Profile(){
    const [data , setData] = useState(
        [
            {
                "idCustomer":"1",
                "LastName":"Rafii",
                "FirstName":"Salma",
                "Adress":"adresse 1",
                "Phone":"0666666666",
                "Email":"salma@gmail.com",
                "Username":"SalmaRafii",
                "Password":"gdgdfFRGT",
            },
            
        ]
        )
        
        return(
            <div className="container">
                
                <div className="row">
                    <h1>Customer Profile</h1>
                <br />
                    <div className="input-group mb-3">
                        <select name="" id="select">
                            <option value="username">Username</option>
                        </select>
                        <input type="text" name="" id="filter" placeholder=' Enter ....'/>
                        <button class="btn btn-outline-primary" type="button" id='filterBtn'>Button</button>
                    </div>
                <div>
                    <br />
                    <table className="table table-sm table-bordered" >
                        <thead>
                            <th></th>
                            <th>Id Customer</th>
                            <th>LastName</th>
                            <th>FirstName</th>
                            <th>Adress</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Action</th>
                        </thead>
                        {
                            data && data.map((obj) =>(
                               <List data={obj} /> 
                            ))
                        }
                    </table>
                    &nbsp;<input type="checkbox" name="cc" id="cc" />&nbsp;
                        <label htmlFor="cc"> tout</label>&nbsp;
                        <button type="button" class="btn btn-danger">Delete</button>
                </div>
                </div>
            </div>
            
        )
}
const List = (props) => {
    return (
            <tr>
                <th><input type="checkbox" name="" id="" /></th>
                <td>{props.data.idCustomer}</td>
                <td>{props.data.LastName}</td>
                <td>{props.data.FirstName}</td>
                <td>{props.data.Adress}</td>
                <td>{props.data.Phone}</td>
                <td>{props.data.Email}</td>
                <td>{props.data.Username}</td>
                <td>{props.data.Password}</td>
                <td>
                    <button  className="btn btn-outline-danger" >Delete</button>&nbsp;
                </td>
            </tr>
       
    );
};
