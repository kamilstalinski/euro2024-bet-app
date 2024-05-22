import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  username: string;
  email: string;
  role: string;
  __v: number;
  _id: string;
}

interface RankTableProps {
  users: User[];
}

export default function RankTable({ users }: RankTableProps) {
  return (
    <div className='mt-4'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'></TableHead>
            <TableHead className='w-[100px]'>Uzytkownik</TableHead>
            <TableHead className='text-right'>Punktacja</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, idx) => {
            return (
              <TableRow key={user._id}>
                <TableCell className='font-medium'>{idx + 1}</TableCell>
                <TableCell className='font-medium'>{user.username}</TableCell>
                <TableCell className='text-right'>0</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
