import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Context/userContext";
import { Link } from "react-router-dom";

// Import components
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
