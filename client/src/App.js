import React from "react";
import "./App.css"
// import "./AdminApp.css";
import AppLayout from "./layouts/AppLayout";
import AdminLayout from "./pages/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import { ROUTES } from "./utils/constants";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.js";
import Category from "./pages/Category.js";
import Comment from "./pages/Comment.js";
import ProductList from "./pages/ProductList.js";
import ProductView from "./pages/ProductView.js";
import ProductUpdate from "./pages/ProductUpdate.js";
import ProductCreate from "./pages/ProductCreate.js";
import Order from "./pages/Order.js";
import Profile from "./pages/Profile.js";
import Detail from "./pages/OrderDetail.js";
import OrderView from "./pages/OrderView.js";
import CommentView from "./pages/CommentView.js";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout/>}>
          <Route path={ROUTES.dashboard} element={<Dashboard />} />
          <Route path={ROUTES.category} element={<Category />} />
          <Route path={ROUTES.comment} element={<Comment />} />
          <Route path={ROUTES.commentView} element={<CommentView />} />
          <Route path={ROUTES.order} element={<Order />} />
          <Route path={ROUTES.orderDetail} element={<Detail />} />
          <Route path={ROUTES.orderView} element={<OrderView />} />
          <Route path={ROUTES.productList} element={<ProductList />} />
          <Route path={ROUTES.productView} element={<ProductView />} />
          <Route path={ROUTES.productUpdate} element={<ProductUpdate />} />
          <Route path={ROUTES.productCreate} element={<ProductCreate />} />
          <Route path={ROUTES.profile} element={<Profile />} />
          </Route>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          <Route path={ROUTES.about} element={<About />} />
          <Route path={ROUTES.shop} element={<Shop />} />
          <Route path={ROUTES.services} element={<Services />} />
          <Route path={ROUTES.cart} element={<Cart />} />
          <Route path={ROUTES.checkout} element={<Checkout />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.signup} element={<SignUp />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
