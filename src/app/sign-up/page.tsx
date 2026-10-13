"use client";

import { Button, Description, FieldError, Fieldset, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const SignUpPage = () => {
   const router = useRouter(); 
 const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    router.push("/")
    // alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

    return (
        <div className="flex flex-col items-center justify-center rounded-3xl bg-surface p-6">
    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <Fieldset.Legend>অ্যাকাউন্ট তৈরি করুন</Fieldset.Legend>
            <Description>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</Description>

            <Fieldset.Group>
                <TextField
                isRequired
                name="name"
                validate={(value) => {
                  if (value.length < 3) {
                    return "Name must be at least 3 characters";
                  }
                  return null;
                }}
              >
                <Label>নাম</Label>
                <Input placeholder="যেমন: রহিম উদ্দিন" />
                <FieldError />
              </TextField>
              
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
         অ্যাকাউন্ট তৈরি করুন
        </Button>
       
      </div>
      <hr className="my-3.5"/>
      <div className="flex items-center  justify-around gap-2">
        <Button type="button" className="w-m bg-green-600">
          Google দিয়ে চালিয়ে যান
        </Button>
        <Button type="button" className="bg-base-300 text-black">
          GitHub দিয়ে চালিয়ে যান
        </Button>
      </div>
      <div className="flex items-center justify-center my-3 gap-2 ">
        <p>অ্যাকাউন্ট আছে?</p>
        <Link href={"sign-in"}><p className="text-green-500"> সাইন ইন করুন</p></Link>
        </div>
    </Form>
  <div><Link href={"/"}><p>← হোম পেজে ফিরে যান</p></Link></div>
        </div>
    );
};

export default SignUpPage;