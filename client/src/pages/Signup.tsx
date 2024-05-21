import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CardWrapper from "@/components/auth/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { z } from "zod";

export default function Signup() {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    const { username, email, password, confirmPassword } = data;
    try {
      const { data } = await axios.post("/signup", {
        username,
        email,
        password,
        confirmPassword,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Register succesful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <CardWrapper
        label='Stwórz swoje konto'
        title='Zarejestruj'
        backButtonHref='/login'
        backButtonLabel='Masz juz swoje konto? Zaloguj się tutaj'
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type='email'
                        placeholder='example@gmail.com'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nazwa u</FormLabel>
                    <FormControl>
                      <Input {...field} type='text' placeholder='John Snow' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type='password' placeholder='******' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input {...field} type='password' placeholder='******' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type='submit' className='w-full'>
              Register
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}
