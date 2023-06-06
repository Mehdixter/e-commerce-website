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
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";
import AuthLayout from "./layouts/AuthLayout";
import { ROUTES } from "./utils/constants";
import './utils/constants';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}/>
          <Route index element={<Home />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          <Route path={ROUTES.about} element={<About />} />
          <Route path={ROUTES.shop} element={<Shop />} />
          <Route path={ROUTES.services} element={<Services />} />
          <Route path={ROUTES.cart} element={<Cart />} />
          <Route path={ROUTES.checkout} element={<Checkout />} />
          <Route element={<AuthLayout />}/>
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.signup} element={<SignUp />} />
          <Route path="*" element={<h1>Not Found</h1>} />

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
    </BrowserRouter>
  );
};

export default App;