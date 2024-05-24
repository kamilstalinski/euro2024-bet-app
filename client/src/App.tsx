import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import { Toaster } from "react-hot-toast";
import { useUserContext } from "./context/userContext";
import Navbar from "./components/layout/Navbar";
import Rank from "./pages/Rank";
import PrivateRoutes from "./utils/PrivateRoutes";
import AdminRoutes from "./utils/AdminRoutes";
import Matches from "./components/Matches";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  const { user } = useUserContext();
  return (
    <div>
      <Toaster
        position='bottom-center'
        toastOptions={{
          duration: 3000,
        }}
      />
      {!!user && <Navbar user={user} />}
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/ranking' element={<Rank />} />
          <Route path='/formularz' element={<Matches />} />
          <Route element={<AdminRoutes />}>
            <Route path='/admin-panel' element={<AdminPanel />} />
          </Route>
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
