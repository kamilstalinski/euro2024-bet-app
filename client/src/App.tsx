import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Navbar from "./components/Navbar";
import Ranking from "./pages/Ranking";
import PrivateRoutes from "./utils/PrivateRoutes";
import AdminRoutes from "./utils/AdminRoutes";

axios.defaults.baseURL = "http://localhost:8000/auth";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Toaster
        position='bottom-center'
        toastOptions={{
          duration: 3000,
        }}
      />
      <Navbar />
      <div className='p-4'>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='/ranking' element={<Ranking />} />
            <Route element={<AdminRoutes />}>
              <Route path='/admin-panel' element={<AdminPanel />} />
            </Route>
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
