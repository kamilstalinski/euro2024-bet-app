import axios from "axios";
import { useEffect, useState } from "react";

interface UsersProps {
  username: string;
  email: string;
  role: string;
  __v: number;
  _id: string;
}

export default function Ranking() {
  const [users, setUsers] = useState<UsersProps[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/users", { withCredentials: true });
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <div>Ranking</div>
      {users.map((user) => {
        return <h1 key={user._id}>{user.username}</h1>;
      })}
    </>
  );
}
