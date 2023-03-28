import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Schedule from "./routes/Schedule";
import Events from "./routes/Events";
import Contact from "./routes/Contact";
import Login from "./routes/Login";

//import Protected from "./components/Protected";
import { Route, Routes } from "react-router-dom";

import Cookies from "universal-cookie";

function App() {
  const cookies = new Cookies();

  let token = cookies.get("TOKEN");
  if (token === "null") {
    token = null;
  }
  console.log("token form APP.js", token);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home token={token} />} />
        <Route path="/about" element={<About token={token} />} />
        <Route path="/schedule" element={<Schedule token={token} />} />
        <Route path="/events" element={<Events token={token} />} />
        <Route path="/contact" element={<Contact token={token} />} />
        <Route path="/login" element={<Login token={token} />} />
      </Routes>
    </>
  );
}

export default App;
