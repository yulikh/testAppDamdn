import LoginForm from "@/components/custom/forms/LoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import damDnLogo from "@/assets/images/damDn-logo.svg";

export default function LogInPage() {
  return (
    <main className="h-screen flex flex-col gap-[55px] items-center justify-center border-2">
     <img src={damDnLogo} alt="damDN Logo" className="sm:h-10 h-8 w-auto" />
      <Card className="max-w-[300px] sm:max-w-[384px]">
        <CardHeader>
        <CardTitle className="text-2xl font-semibold">Login</CardTitle>
        <CardDescription className="text-sm font-normal text-muted-foreground">Enter your email below to login to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
