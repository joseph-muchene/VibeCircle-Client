import React from "react";
import { BrowserRouter as Routing, Route, Routes } from "react-router-dom";
import App from "./App";
import Blog from "./pages/Blog";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Friends from "./pages/Friends";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
function Router() {
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
          <Route element={<Friends />} path="/friends" />
        </Routes>
      </Routing>
    </div>
  );
}

export default Router;
