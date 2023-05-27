import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { useState  , useEffect } from "react";
import {BsArrow90DegUp}from "react-icons/fa";

export default function Categorie(){
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const postData = () => {
        console.log(id);
        console.log(name);
        console.log(description);
    }

    const [data , setData] = useState(
    [
        {
            "idCategory":"1",
            "Name":"Name1",
            "Description":"Description"
        },
        {
            "idCategory":"2",
            "Name":"Name2",
            "Description":"Description "
        },
        {
            "idCategory":"3",
            "Name":"Name3",
            "Description":"Description"
        },
        
    ]
    )
    return(
        <div className="container">
            <div className='row'>
                <h1>Category Page</h1>
                <div className='col-lg-6 col-md-12' style={{marginTop:'10px'}}>
                <div className='card'>
                    <div className='card-body'>
                    <h4 className='text-primary'>Categories List</h4>
                    <br />
                    <table className="table table-sm table-bordered">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Id </th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
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
                    </div></div>
                </div>

                <div className='col-lg-6 col-md-12' style={{marginTop:'10px'}}>
                <div className='card'>
                    <div className='card-body'>
                    <h4 className='text-primary'>New Category</h4>
                    <br />
                    Id: <input  type="text" className='form-control'
                        value={id} onChange={event => setId(event.target.value)}
                    />
                    <br />
                    Name: <input  type="text" className='form-control'
                        value={name} onChange={event => setName(event.target.value)}
                    />
                    <br />
                     Description: <textarea cols="30" rows="5" type="text" className='form-control'
                        value={description} onChange={event => setDescription(event.target.value)} />
                    <br />
                    <button type="button" onClick={postData} class="btn btn-success">Add</button>
                </div>
                
                </div></div>
                </div>
        </div>
    )
}

const List = (props) => {
    return (
            <tr>
                <td><input type="checkbox" /></td>
                <td>{props.data.idCategory}</td>
                <td>{props.data.Name}</td>
                <td>{props.data.Description}</td>
                <td>
                    <button  className="btn btn-outline-warning">Update</button>
                    <button  className="btn btn-outline-danger">Delete</button>
                    
                </td>
            </tr>
       
    );
};

