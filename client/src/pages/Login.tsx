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
import { LoginSchema } from "@/schema";
import { Message, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useState } from "react";

export default function Login() {
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setPending(true);
    const { email, password } = data;
    try {
      const { data } = await axios.post("/signup", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        console.log(data);
        toast.success("Zalogowano pomyślnie. Witamy!");
        navigate("/home");
        setPending(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error as Message);
    }
  };

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <CardWrapper
        label='Zaloguj się do swojego konta'
        title='Zaloguj się'
        backButtonHref='/login'
        backButtonLabel='Nie masz jeszcze konta? Załóz je tutaj'
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
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hasło</FormLabel>
                    <FormControl>
                      <Input {...field} type='password' placeholder='******' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type='submit' className='w-full' disabled={pending}>
              Zaloguj
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}
