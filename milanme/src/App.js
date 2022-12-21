import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import MyWork from "./pages/MyWork";
//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Swith --> Routes

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Router>
        <Nav />
        <div>
          <Routes>
            <Route exact path="/" element={<AboutUs />} />
            <Route exact path="/work" element={<MyWork />} />
            <Route exact path="/contact" element={<ContactUs />} />

          </Routes>
        </div>


      </Router>


    </div>
  );
}

export default App;
