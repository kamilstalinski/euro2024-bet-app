import axios from "axios";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import toast from "react-hot-toast";

export default function LogoutButton() {
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/login");
          setUser(null);
          toast.success("Wylogowano!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button
      className='bg-[#F9BF4A] hover:bg-[#FED685] text-black'
      onClick={handleLogout}
    >
      Wyloguj
    </Button>
  );
}
