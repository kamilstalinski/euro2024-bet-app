import LogoutButton from "./LogoutButton";
import { useUserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user } = useUserContext();
  return (
    <>
      {!!user && (
        <div className='h-20 w-full flex justify-between py-4 px-4'>
          <div className='h-full flex items-center space-x-4'>
            <Link to='/'>Strona główna</Link>
            <Link to='/ranking'>Ranking</Link>
          </div>
          <div className='h-full flex items-center space-x-4'>
            {user.role === "admin" && (
              <Link to='/admin-panel'>Admin Panel</Link>
            )}
            <LogoutButton />
          </div>
        </div>
      )}
    </>
  );
}
