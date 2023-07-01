import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../AdminApp.css';
import { useState  , useEffect } from "react";
import axios from "axios";
import CategoryCreate from './CategoryCreate.js'

export default function Categorie(){
    const[category, setCategory]= useState([]);
     
    useEffect( ()=>{
        const getCategory= ()=>{
            fetch("http://127.0.0.1:8000/api/category")
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.categories)
                setCategory(response.categories)
            })
            .catch(error=>{ console.log(error)});
        }
        getCategory();
    },[]);
  
    const deleteCategory = (id) => {
        axios.delete('http://127.0.0.1:8000/api/categoryDelete/'+id).then(function(response){
            console.log(response.data);
            alert("Successfully Deleted");
        });
    }
   

    return(
        
        <div className="container">
            <div className='row'>
                <h1>Category Page</h1>
                <div className='col-lg-7 col-md-12' style={{marginTop:'10px'}}>
                <div className='card'>
                    <div className='card-body'>
                    <h4 className='text-primary'>Categories List</h4>
                    <br />
                    <table className="table table-sm table-bordered">
                        <thead>
                        <tr>
                            <th>All </th>
                            <th>Id </th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            category.map((pdata, index)=>(
                                <tr>
                                <td><input  type="checkbox" /></td>
                                <td>{pdata.id } </td>
                                <td>{pdata.nameCategory } </td>
                                <td>{pdata.description } </td>
                                <td>
                                <button onClick={() => deleteCategory(pdata.id)} className="btn btn-danger">Delete</button>
                                </td>
                                </tr>
                            ))
                        }
                        </tbody>
                        
                    </table>
                    &nbsp;<input type="checkbox" name="cc" id="cc" />&nbsp;
                    <label htmlFor="cc"> tout</label>&nbsp;
                    <button type="button" className="btn btn-danger">Delete</button>
                    </div></div>
                </div>
            
                <div className='col-lg-5 col-md-12' style={{marginTop:'10px'}}>
                <CategoryCreate />
                </div>
            </div>
        </div>
        
    )
}



