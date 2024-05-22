import { UserContext } from "../../context/userContext";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Strona główna</h1>
      {!!user && <h2>Witaj {user.username}!</h2>}
    </div>
  );
}
