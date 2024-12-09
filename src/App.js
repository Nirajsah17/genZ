import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Context/userContext";
import ProtectedRoute from "./protectedRoute";

// Import components
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import SignIn from "./components/SignIn";
import ProductForm from "./components/AddProduct";
import UserList from "./components/UserList";
import DashBoard from "./components/Dashboard"

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<DashBoard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/users"
            element={<ProtectedRoute element={UserList} />}
          />
          <Route
            path="/addProduct"
            element={<ProtectedRoute element={ProductForm} />}
          />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
