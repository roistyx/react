import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./pages/Form";
import Layouts from "./pages/Layouts";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            {/* Create navigation links */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/layouts">Layouts</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/layouts" element={<Layouts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
