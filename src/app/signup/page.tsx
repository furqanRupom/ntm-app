"use client"

import Link from "next/link";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data:any) =>{
    console.log(data)
  }
  return (
    <section className="bg-cover  "  style={{backgroundImage:"url(https://i.ytimg.com/vi/ePC_jwL4phg/maxresdefault.jpg)",height:"100vh"}}>


        <form className="w-full pt-24 h-full backdrop-blur-md px-10 lg:px-0" action="" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-3xl font-bold text-center text-white pt-12 pb-6 uppercase">Please Sign Up</h3>
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
            <button className="px-8 py-3 text-2xl font-bold rounded-2xl bg-green-500 text-white hover:text-green-500 uppercase hover:bg-white duration-150 my-4  shadow shadow-green-400" type="submit">Sign Up</button>
          </div>

          </div>

        </div>
        </form>

    </section>
  )
}

export default SignUp;
