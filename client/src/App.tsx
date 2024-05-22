import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import ProtectedRoutes from "./utils/ProtectedRoutes";

axios.defaults.baseURL = "http://localhost:8000/auth";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Toaster
        position='top-center'
        toastOptions={{
          duration: 2000,
        }}
      />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/admin-panel' element={<AdminPanel />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
