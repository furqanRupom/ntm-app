"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import {useRouter} from 'next/navigation'
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(false);
  const router = useRouter();
  // log out

  const logOut = async () => {
    try {
        await axios.get('/api/users/logout');
        toast.success('user Log out successfully');
        router.push('/login');
    } catch (error:any) {
        toast.error(error.message)
    }
  };
  return (
    <header className="grid grid-cols-[1fr,5fr]">
      {/* sidebar */}
      <nav className="bg-green-50 h-full min-h-screen">
        <ul>
          <li className="flex flex-col  text-xl text-green-900 px-5 py-5  space-y-4">
            <Link href="/">Home</Link>
            <Link href="/">dashboard</Link>
            <Link href="/">activity</Link>
            <Link href="/">users</Link>
            <Link href="/">Edit and customize</Link>
          </li>
        </ul>
      </nav>

      {/* top bar */}
      <nav className="relative">
        <ul className="flex items-center justify-between px-8 py-2 w-full">
          <li>
            <div onClick={() => setProfile(true)} className="cursor-pointer">
              <Image
                width={70}
                height={40}
                className="rounded-[500px] object-cover ring ring-green-400"
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt="profile"
              />
            </div>
          </li>

          <li>
            <button onClick={logOut} className="px-7 py-3 rounded-3xl hover:text-white hover:bg-green-400 text-xl  duration-150 text-green-400 bg-white shadow">
              Log out
            </button>
          </li>
        </ul>

        {/* profile visit */}

        {profile && (
          <div className="absolute top-8 left-[120px]">
            <nav className="px-8 py-4 rounded-3xl shadow bg-white relative">
              <ul>
                <li className="flex flex-col space-y-2 pt-3">
                  <Link href="/">Your Profile</Link>
                  <Link href="/">Settings</Link>
                </li>
              </ul>
              <button
                onClick={() => setProfile(false)}
                className="absolute top-1 right-3 text-green-400"
              >
                X
              </button>
            </nav>
          </div>
        )}
      </nav>

      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
};

export default Profile;
