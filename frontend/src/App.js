import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import IndexLayout from "./layout/IndexLayout";
import HomePage from "./layout/pages/home/HomePage";
import AboutPage from "./layout/pages/about/AboutPage";

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<IndexLayout />}>
                  <Route index element={<HomePage />}/>
                  <Route path="/about" element={<AboutPage />}/>
              </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
