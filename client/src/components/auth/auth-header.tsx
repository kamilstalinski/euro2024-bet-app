import authLogo from "../../assets/auth-logo.png";
interface IAuthHeaderProps {
  label: string;
  title: string;
}

export default function AuthHeader({ label }: IAuthHeaderProps) {
  return (
    <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
      <img src={authLogo} alt='Euro logo' className='' />
      <p className='text-muted-foreground text-sm text-white'>{label}</p>
    </div>
  );
}
