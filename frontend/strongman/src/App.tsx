import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import './App.css';
import MainPage from "./pages/MainPage";
import OrderForm from "./pages/OrderForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/active" element={<MainPage />} />
      <Route path="/iwant" element={<OrderForm />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
