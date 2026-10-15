"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

const SignInPage = () => {
   const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {data : session , isPending : isSessionLoading}=authClient.useSession();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
     
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/"
    });
setIsLoading(false);
if(error){
  toast.error('সাইন ইন করতে ব্যর্থ হয়েছে।', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
}else {
      toast.success(`স্বাগতম, সফলভাবে সাইন ইন হয়েছে!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
       router.push("/");
  };};
  const handleGoogleSignUp = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
const handleGithubSignUp = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
  });
};
 if (isSessionLoading) {
    return <div className="text-center p-6">লোডিং...</div>;
  }

    return (
        <div className="flex flex-col items-center justify-center rounded-3xl bg-surface mt-6 p-6">

            {session ? (
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-xl font-bold text-green-600">আপনি ইতিমধ্যেই সাইন ইন আছেন!</h2>
          <p>স্বাগতম ফিরে আসার জন্য, {session.user.name}</p>
          <Link href="/">
            <Button className="bg-green-600 text-white">হোম পেজে যান</Button>
          </Link>
        </div>
      ):(
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <Fieldset.Legend> সাইন ইন</Fieldset.Legend>
            <Description>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</Description>

            <Fieldset.Group>       
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
        className="my-3"
      >
        <Label>ইমেইল</Label>
        <Input placeholder="you@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
        className="my-3"
      >
        <Label>পাসওয়ার্ড</Label>
        <Input placeholder="পাসওয়ার্ড লিখুন" />
        <Description>কমপক্ষে ৮ অক্ষর</Description>
        <FieldError />
      </TextField>
            </Fieldset.Group>


      <div >
        <Button type="submit" className="w-full bg-green-600">
         সাইন ইন
        </Button>
       
      </div>
      <hr className="my-3.5"/>
      <div className="flex items-center  justify-around gap-2">
        <Button onClick={handleGoogleSignUp}  type="button" className="w-m bg-green-600">
          Google দিয়ে চালিয়ে যান
        </Button>
        <Button onClick={handleGithubSignUp}  type="button" className="bg-base-300 text-black">
          GitHub দিয়ে চালিয়ে যান
        </Button>
      </div>
      <div className="flex items-center justify-center my-3 gap-2 ">
        <p>অ্যাকাউন্ট নেই?</p>
        <Link href={"sign-up"}><p className="text-green-500"> সাইন আপ করুন</p></Link>
        </div>
    </Form>
      )}
    
  <div><Link href={"/"}><p>← হোম পেজে ফিরে যান</p></Link></div>
        </div>
    );
};

export default SignInPage;