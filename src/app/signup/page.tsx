"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  // const router = useRouter()
  const [userData,setUserData] = useState();
  const [disabled,setDisabled] = useState(false);
  const [loading,setLoading] = useState(false);
  const onSubmit = async(user:any) =>{
    const {username,email,password} = user;
    try {
      setLoading(true);

      const response = await axios.post('/api/users/signup',user)
      console.log('sign up successfully',response.data);
      // router.push('/');

    } catch (error:any) {
      console.log(error.message)
      toast.error(error.message)

    }finally{
      setLoading(false);
    }

  }

  return (
    <section className="bg-cover  "  style={{backgroundImage:"url(https://i.ytimg.com/vi/ePC_jwL4phg/maxresdefault.jpg)",height:"100vh"}}>


        <form className="w-full pt-24 h-full backdrop-blur-md px-10 lg:px-0" action="" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-3xl font-bold text-center text-white pt-12 pb-6 uppercase">{loading ? 'Processing': 'Please Sign Up'}</h3>
        <div className="mx-auto max-w-xl ">
          <div className="flex flex-col  space-y-8">
          <div className="w-full ">
            <label className="text-lg lg:text-2xl text-white  font-semibold" htmlFor="username">Name</label>
            <input className="px-5 w-full  py-3 mt-2 rounded-lg ring-4 ring-green-500 focus:outline-none outline-green-300" placeholder="name" type="text" {...register('username')} />
          </div>
          <div className="w-full ">
            <label className="text-lg lg:text-2xl text-white  font-semibold" htmlFor="email">Email</label>
            <input className="px-5 w-full  py-3 mt-2 rounded-lg ring-4 ring-green-500 focus:outline-none outline-green-300" placeholder="email" type="email" {...register('email')} />
          </div>
          <div className="w-full ">
            <label className="text-lg lg:text-2xl text-white  font-semibold" htmlFor="password">Password</label>
            <input className="px-5 w-full  py-3 mt-2 rounded-lg ring-4 ring-green-500 focus:outline-none outline-green-300" placeholder="password" type="password" {...register('password')} />
          </div>

          <div>
          <p className="text-white">
            Already have an account please  <span className="text-green-500"><Link href="/login">Login</Link></span>
          </p>
            <button  className="px-8 py-3 text-2xl font-bold rounded-2xl bg-green-500 text-white hover:text-green-500 uppercase hover:bg-white duration-150 my-4  shadow shadow-green-400" type="submit">Sign Up</button>
          </div>

          </div>

        </div>
        </form>

    </section>
  )
}

export default SignUp;
