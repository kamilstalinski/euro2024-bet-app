import axios from "axios";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

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
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button variant='destructive' onClick={handleLogout}>
      Wyloguj
    </Button>
  );
}
