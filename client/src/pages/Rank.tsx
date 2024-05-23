import RankTable from "@/components/RankTable";
import axios from "axios";
import { useEffect, useState } from "react";

interface UsersProps {
  username: string;
  email: string;
  role: string;
  __v: number;
  _id: string;
}

export default function Rank() {
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
    <div className='container'>
      <h1 className='text-2xl font-bold'>Ranking</h1>
      <RankTable users={users} />
    </div>
  );
}
