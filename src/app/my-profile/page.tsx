"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Fieldset, Form, Input, Label, TextField } from '@heroui/react';
import { useState } from 'react';

const MyProfilePage = () => {
     const { data: session } = authClient.useSession();
    const [name, setName] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await authClient.updateUser({
            name: name,
        });
    };

    return (
        <div className="flex flex-col items-center justify-center rounded-3xl bg-surface p-6">
            <h1 className="font-bold">আমার প্রোফাইল</h1>
            <p className="badge bg-base-200 text-xs">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

 <li className="p-4 border rounded border-base-200 flex flex-col sm:flex-row justify-between items-center m-4 shadow-sm w-full">
      <div className="flex items-center gap-2">
         <div className="my-4 text-center pb-4 w-full">
                <p>নাম:{session?.user?.name || 'লোড হচ্ছে...'}</p>
                <p>ইমেইল:{session?.user?.email || 'লোড হচ্ছে...'}</p>
            </div>
      </div>

      <div className="flex flex-col items-center">
       <button onClick={()=> authClient.signOut()} className="btn  btn-xs bg-[#228b22] text-white border-2 rounded-md p-3 sm:btn-sm md:btn-md lg:btn-lg"> সাইন আউট</button>
      </div>
    </li>

            <Form onSubmit={handleSubmit}>
                <h1 className='font-bold'>তথ্য</h1>
                <Fieldset className='w-56 sm:w-96 p-3 m-3'>
                    <TextField name="name">
                        <Label>নাম</Label>
                        <Input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="যেমন: রহিম উদ্দিন" 
                        />
                    </TextField>
                    <Fieldset.Actions>
                        <Button type="submit" className="w-full btn  btn-xs bg-[#228b22] text-white border-2 rounded-md p-3 sm:btn-sm md:btn-md">
                            আপডেট 
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
};

export default MyProfilePage;
