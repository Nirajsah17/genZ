import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Import components
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <hr />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;