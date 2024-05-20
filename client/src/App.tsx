import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";

axios.defaults.baseURL = "http://localhost:8000/auth";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin-panel' element={<AdminPanel />} />
      </Routes>
    </>
  );
}

export default App;
