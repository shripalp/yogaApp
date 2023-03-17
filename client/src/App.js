import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Schedule from "./routes/Schedule";
import Events from "./routes/Events";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
//import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
