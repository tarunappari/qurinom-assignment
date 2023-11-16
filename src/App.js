import { Route, Routes } from "react-router-dom";
import { Globalstyles } from "./GlobalStyles";
import LandingPage from "./Pages/LandingPage";
import DashBoardPAge from "./Pages/DashBoardPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Globalstyles />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoardPAge />} />
      </Routes>
    </div>
  );
}

export default App;
