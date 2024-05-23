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
        const { data } = await axios.get("/auth/users", {
          withCredentials: true,
        });
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className='container mt-8'>
      <h1 className='text-2xl font-bold'>Ranking uzytkowników</h1>
      <RankTable users={users} />
    </div>
  );
}
