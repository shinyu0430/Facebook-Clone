import React from "react";

import { signIn } from "next-auth/react";

import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="w-[1200px] h-full mx-auto flex justify-between">
        {/* 左側區塊 */}
        <div className="flex-1 flex items-center justify-center ">
          <div className="">
            <h1 className="text-[86px] font-bold text-[#3b5998]">facebook</h1>
            <p className="text-3xl">
              Connect with <span className="text-blue-700">Mavis Tsai</span> and
              the world around you on Facebook.
            </p>
          </div>
        </div>

        {/* 右側區塊 */}
        <div className="flex-1 flex items-center justify-center ml-5">
          <div className=" bg-white border border-gray-300 rounded py-8">
            <img src="login.jpeg" className="w-[50%] mx-auto" />
            <div className="flex justify-center">
              <div
                className="flex gap-4 bg-[#fff] p-4 px-6 
                border mt-4
                mx-auto items-center rounded-[6px] 
                hover:bg-gray-100 cursor-pointer"
                onClick={() => signIn("google")}
              >
                <FcGoogle className="text-[30px]" />
                SignIn with Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
