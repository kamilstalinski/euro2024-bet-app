import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface IBackButtonProps {
  label: string;
  href: string;
}

export default function BackButton({ label, href }: IBackButtonProps) {
  return (
    <Button
      variant='link'
      className='font-normal w-full bg-white bg-[#304FFE] text-white'
      size='sm'
      asChild
    >
      <Link to={href} className='cursor-pointer'>
        {label}
      </Link>
    </Button>
  );
}
