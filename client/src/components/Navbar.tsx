import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

interface NavbarProps {
  user: {
    role: string;
  };
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <div className='w-full h-30 bg-blue-700'>
      <div className='container flex justify-between py-4 bg-blue-700 text-white'>
        <div className='h-full flex items-center space-x-8'>
          <Link to='/'>
            <img
              src={logo}
              alt='logo'
              className='mr-4 brightness-0 saturate-100 invert sepia-0 hue-rotate-60'
            />
          </Link>
          <Link to='/grupy'>Grupy</Link>
          <Link to='/ranking'>Ranking</Link>
        </div>
        <div className='h-30 flex items-center justify-center space-x-4'>
          {user.role === "admin" && <Link to='/admin-panel'>Admin Panel</Link>}
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
