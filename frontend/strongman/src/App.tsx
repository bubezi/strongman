import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import './App.css';
import MainPage from "./pages/MainPage";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/active" element={<MainPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
