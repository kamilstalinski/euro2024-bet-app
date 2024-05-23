import { useUserContext } from "../context/userContext";

export default function Home() {
  const { user } = useUserContext();

  return (
    <div className='container'>
      <h1>Strona główna</h1>
      {!!user && <h2>Witaj {user.username}!</h2>}
    </div>
  );
}
