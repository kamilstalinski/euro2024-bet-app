import { useEffect, useState } from "react";
import { Table, TableRow, TableBody, TableCell } from "./ui/table";
import axios from "axios";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

interface UsersProps {
  username: string;
  email: string;
  role: string;
  __v: number;
  _id: string;
}

export default function AdminUserTable() {
  const [users, setUsers] = useState<UsersProps[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/users/users", {
          withCredentials: true,
        });
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className='container mt-4'>
      <Table className='bg-white text-[#1A313C] border rounded-lg'>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow key={user._id}>
                <TableCell className='font-medium'>{user.username}</TableCell>
                <TableCell className='font-medium'>{user.email}</TableCell>
                <TableCell className='text-right'>
                  <Button variant='destructive'>
                    <Trash2 className='mr-2 h-4 w-4' /> Usuń
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
