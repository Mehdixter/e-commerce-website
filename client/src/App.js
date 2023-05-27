import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.js';
import Category from './pages/Category.js';
import Comment from './pages/Comment.js';
import ProductList from './pages/ProductList.js';
import ProductView from './pages/ProductView.js';
import ProductUpdate from './pages/ProductUpdate.js';
import ProductCreate from './pages/ProductCreate.js';
import Order from './pages/Order.js';
import Profile from './pages/Profile.js';
import Detail from './pages/OrderDetail.js';
import OrderView from './pages/OrderView.js';
import CommentView from './pages/CommentView.js';


const App = () => {
  return (
    <BrowserRouter>
    
    <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        
          <Route path="/category" element={<Category />} />

          <Route path="/comment" element={<Comment />} />
          <Route path="/commentView" element={<CommentView />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/order" element={<Order />} />
          <Route path="/orderDetail" element={<Detail />} />
          <Route path="/orderView" element={<OrderView />} />

          <Route path="/productList" element={<ProductList />} />
          <Route path="/productView" element={<ProductView />} />
          <Route path="/productUpdate" element={<ProductUpdate />} />
          <Route path="/productCreate" element={<ProductCreate />} />

          <Route path="/profile" element={<Profile />} />
          
          
        </Routes>
     </Sidebar> 
    </BrowserRouter>
  );
};

export default App;