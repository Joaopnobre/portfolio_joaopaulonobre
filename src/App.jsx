import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
 import Home from "./Routes/Home";
import AboutMe from "./Routes/About/AboutMe";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "./Routes/Project/Projects";

function App() {
  useEffect(() => {
    document.title = "João Paulo Nobre Medeiros";
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/portfolio_joaopaulonobre" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<AboutMe/>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
