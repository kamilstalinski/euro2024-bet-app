import { Button } from "../ui/button";

interface IBackButtonProps {
  label: string;
  href: string;
}

export default function BackButton({ label, href }: IBackButtonProps) {
  return (
    <Button variant='link' className='font-normal w-full' size='sm' asChild>
      <a href={href}>{label}</a>
    </Button>
  );
}
