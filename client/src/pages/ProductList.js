import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../AdminApp.css';
import { useState  , useEffect } from "react";
import { NavLink } from 'react-router-dom';


export default function ProductList(){

    const [data , setData] = useState(
    [
        {
            "idProduct":"1",
            "image":"./img/bg9",
            "name":"name1",
            "description": "description",
            "stock":"15",
            "price":"16.5",
            "evaluation":"4.8",
            "categorie":"Categorie1",
        },
        {
            "idProduct":"1",
            "image":"./img/bg9",
            "name":"name1",
            "description": "description",
            "stock":"15",
            "price":"16.5",
            "evaluation":"4.8",
            "categorie":"Categorie1",
        },
        {
            "idProduct":"1",
            "image":"./img/bg9",
            "name":"name1",
            "description": "description",
            "stock":"15",
            "price":"16.5",
            "evaluation":"4.8",
            "categorie":"Categorie1",
        },
    ]
    )
    
    return(
        <div className="container">
            
            <div className="row">
            
                <h1>Product List</h1>
                <div>
                <NavLink  to="/productCreate" className="btn btn-outline-Primary">New Product</NavLink>
                </div>
               <br />
                <div className="input-group mb-3">
                    <select name="" id="select">
                        <option value="DateProduct">Date</option>
                        <option value="idOrder">Order ID</option>
                        <option value="idCustomer">Customer ID</option>
                        <option value="Status">Status</option>
                    </select>
                    <input type="text" name="" id="filter" placeholder=' Enter ....'/>
                    <button class="btn btn-outline-primary" type="button" id='filterBtn'>Button</button>
                </div> 
            <div>
                <table className="table table-sm table-bordered" >
                    <thead>
                        <th></th>
                        <th >idProduct </th>
                        <th >Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Evaluation</th>
                        <th>Categorie</th>
                        <th>Actions</th>
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
                <td>{props.data.idProduct}</td>
                <td><img src={props.data.image} /></td>
                <td>{props.data.name}</td>
                <td>{props.data.description}</td>
                <td>{props.data.stock}</td>
                <td>{props.data.price}</td>
                <td>{props.data.evaluation}</td>
                <td>{props.data.categorie}</td>
                <td>
                <NavLink  to="/productView" className="btn btn-outline-success">View</NavLink>&nbsp;
                <NavLink  to="/productUpdate" className="btn btn-outline-success">Update</NavLink>&nbsp;
                    <button  className="btn btn-outline-danger" id='btn'>Delete</button>&nbsp;
                    
                </td>
            </tr>
       
    );
};

