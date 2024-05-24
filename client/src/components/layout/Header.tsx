interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <div className='bg-[#000D40]'>
      <div className='container flex space-x-8 pt-4'>{children}</div>
    </div>
  );
}
