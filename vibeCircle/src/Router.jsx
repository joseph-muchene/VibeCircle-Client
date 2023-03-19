import React, { useEffect } from "react";
import {
  BrowserRouter as Routing,
  Route,
  Routes,
  redirect,
  useNavigate,
  Navigate,
} from "react-router-dom";
import App from "./App";
import Blog from "./pages/Blog";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Friends from "./pages/Friends";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "./features/Auth/AuthSlice";
import Navbar from "./core/Navbar";
import CreatePost from "./components/Editor";

function Router() {
  // const navigate = useNavigate();
  const userFromLocalStorage = JSON.parse(localStorage.getItem("auth"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(userFromLocalStorage?._id));
  }, []);

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("auth"));
    console.log(userFromLocalStorage);
    if (userFromLocalStorage === undefined) window.localStorage.clear();
  }, []);

  const hello = () => {
    return (
      <div>
        <Navbar />
        <h1 className="my-3 text-center">Page Not Found</h1>
      </div>
    );
  };

  return (
    <div>
      <Routing>
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
          <Route element={<Account />} path="/account" />
          <Route element={<Settings />} path="/settings" />
          <Route element={<CreatePost />} path="/post/new" />
          <Route element={<Friends />} path="/friends" />
          <Route element={hello()} path="*" />
        </Routes>
      </Routing>
    </div>
  );
}

export default Router;
