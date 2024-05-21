import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import AuthHeader from "./auth-header";
import BackButton from "./back-button";

interface ICardWrapperProps {
  label: string;
  title: string;
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
}

export default function CardWrapper({
  label,
  title,
  backButtonHref,
  backButtonLabel,
  children,
}: ICardWrapperProps) {
  return (
    <Card className='xl:w-1/4 md:w-1/2 shadow-md'>
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}
