import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../AdminApp.css';
import { useState  , useEffect } from "react";
import { NavLink } from 'react-router-dom';


export default function ProductCreate(){

    const [id, setId] = useState();
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [stock, setStock] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();

    const postData = () => {
        console.log(id);
        console.log(name);
        console.log(stock);
        console.log(price);
        console.log(category); 

    }

    /*function handelImage(){
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    function handleApi(){
        const formData = new FormData()
        formData.append('image', image)
        axios.post('url', formData).then ((res) =>{
            console.log(res)
        })
    }*/

    return(
        
        <div className='container'>
            <div className='row'>
                    <div>
                        <h1 className='text-primary'>New Product</h1>
                        <br />
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <h4>Add image</h4>
                            <br />
                            <input  type="file" name='file' /*onChange={handelImage}*//>
                            <br />
                            <br />
                            <button type="button" /*onClick={handleApi}*/ class="btn btn-success" style={{width:'100px'}}>Add</button>
                            
                        </div>
                    </div>
                    <div className='card' style={{marginTop:'10px'}}>
                        <div className='card-body'>
                            
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
                            Stock: <input  type="text" className='form-control'
                                value={stock} onChange={event => setStock(event.target.value)}
                            />
                            <br />
                            Price: <input  type="text" className='form-control'
                                value={price} onChange={event => setPrice(event.target.value)}
                            />
                            <br />
                            
                            Category: <input  type="text" className='form-control'
                                value={category} onChange={event => setCategory(event.target.value)}
                            />
                            <br />
                            <button type="button" onClick={postData} class="btn btn-success"><NavLink>Add</NavLink></button>&nbsp;
                            <NavLink  to="/productList" className="btn btn-primary" id="createProductBack">Back</NavLink>
                        </div>
                    
                </div>


                
                    
                
            </div>
        </div>
                    
    )

    
}