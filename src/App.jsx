import "./App.css";
import React from "react";

import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskDetails } from "./pages/TaskDetails";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/task" element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
