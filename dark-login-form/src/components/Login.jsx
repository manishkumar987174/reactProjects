import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaApple } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [detail, setDetails] = useState("");

  const emailId = (event) => {
    setEmail(event.target.value);
    // console.log(email);
  };
  const pass = (event) => {
    setPassword(event.target.value);
    // console.log(password);
  };

  const submit = (event) => {
    event.preventDefault();

    const newDetails = {
      Email: email,
      Password: password,
    };

    // setDetails(newDetails);
    console.log(newDetails);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className=" mt-3 flex justify-center items-center h-screen bg-black ">
        <div className="w-[400px] text-white p-8">
          <h2 className="text-3xl mb-1 ">Login To Your Account</h2>
          <p className="text-sm text-gray-400 mb-6">Connect With Us</p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <button className="relative flex items-center justify-center gap-2 bg-white text-black px-4 py-5  rounded-md text-sm hover:bg-blue-400 hover:text-white hover:shadow-md transition cursor-pointer">
              <FcGoogle /> Google
            </button>
            <button className="relative flex items-center justify-center gap-2 bg-white text-black px-4 py-5 rounded-md text-sm  hover:bg-blue-400 hover:text-white hover:shadow-md transition cursor-pointer">
              {" "}
              <TiVendorMicrosoft />
              Microsoft
            </button>
            <button className="relative flex items-center justify-center gap-2 bg-white text-black px-4 py-5 rounded-md text-sm  hover:bg-blue-400 hover:text-white hover:shadow-md transition cursor-pointer">
              <FaGithub />
              Github
            </button>
            <button className="relative flex items-center justify-center gap-2 bg-white text-black px-4 py-5 rounded-md text-sm  hover:bg-blue-400 hover:text-white hover:shadow-md transition cursor-pointer">
              <FaApple /> Apple
            </button>
          </div>
          <div className="relative text-center text-gray-300 text-xs my-4">
            OR LOGIN WITH YOUR
            <span className="absolute top-1/2 left-0 h-px bg-gray-500"></span>
            <span className="absolute top-1/2 left-0 h-px bg-gray-500"></span>
          </div>
          <form onSubmit={submit} action="" className="flex flex-col gap-3 ">
            <label htmlFor="">Email</label>
            <input
              onChange={emailId}
              value={email}
              className="bg-neutral-800 py-2 px-2  rounded-md text-white focus:outline-none"
              type="email"
              placeholder="Email"
            />
            <label htmlFor="">Password</label>
            <input
            required={true}
              onChange={pass}
              value={password}
              className="bg-neutral-800 py-2 px-2 rounded-md text-white focus:outline-none"
              type="password"
              placeholder="Password"
            />
            <div>
              <a
                href=""
                className=" text-centerabsolute top-{26px} text-xs text-blue-400"
              >
                Forget Password
              </a>
            </div>
            <button className="relative flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-md text-sm  hover:bg-blue-400 hover:text-white hover:shadow-md transition cursor-pointer ">
              Log In
            </button>
          </form>
          <p className="text-center  text-sm ">
            New User?{" "}
            <a className="text-blue-400 text" href="">
              Sign Up For An Account
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
