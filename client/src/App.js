import React from "react";
import "./AdminApp.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import AdminLayout from "./pages/AdminLayout";
import { ROUTES } from "./utils/constants";

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
        </Routes>
    </BrowserRouter>
  );
};

export default App;
