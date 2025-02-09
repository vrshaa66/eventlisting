import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddEventPage from "./components/AddEventPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-event" element={<AddEventPage />} />
      </Routes>
    </Router>
  );
};

export default App;