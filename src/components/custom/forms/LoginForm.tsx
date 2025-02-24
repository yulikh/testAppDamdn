import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';


const formSchema = z.object({
    email: z.string()
      .min(5, { message: "Email must be at least 5 characters." })
      .email({ message: "Invalid email format." }), 
    password: z.string()
      .min(6, { message: "Password must be at least 6 characters." }) 
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." }) 
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[\W_]/, { message: "Password must contain at least one special character." }),
  });

export default function LoginForm() {
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit() {
    navigate('/home')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
                <div className="flex justify-between items-center">
                <FormLabel>Password</FormLabel>
                <Button variant="link" className="text-sm text-muted-foreground pl-0 pr-0">Forgot your password?</Button>
                </div>
              <FormControl>
                <Input placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button className="bg-primary text-[#FAFAFA] w-full" variant="default" type="submit">Login</Button>
      </form>
    </Form>
  );
}
