import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface IBackButtonProps {
  label: string;
  href: string;
}

export default function BackButton({ label, href }: IBackButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      variant='link'
      className='font-normal w-full'
      size='sm'
      onClick={() => navigate(href)}
      asChild
    >
      <p className='cursor-pointer'>{label}</p>
    </Button>
  );
}
