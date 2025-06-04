import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);

    // match email and password
    if (
      e.target.email.value !== "" &&
      e.target.password.value !== ""
    ) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }

    if (e.target.email.value === "" && e.target.password.value === "") {
      setFormError({
        email: "Email is required",
        password: "Password is required",
      });
    } else {
      if (e.target.password.value === "") {
        setFormError({
          email: "",
          password: "Password is required",
        });
      } else {
        if (e.target.email.value === "") {
          setFormError({
            email: "Email is required",
            password: "",
          });
        }
      }
    }
  };
  return (
    <div className={"flex flex-col gap-6 mx-auto w-[40%] my-[40px] "}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
                <label htmlFor="email" className="text-red-500">
                  {formError.email}
                </label>
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" />
                <label htmlFor="password" className="text-red-500">
                  {formError.password}
                </label>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
