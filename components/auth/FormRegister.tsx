import Link from "next/link";
import React from "react";

const FormRegister = () => {
  return (
    <form action="" className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          className="bg-gray-50 border-gray-300 w-full p-2.5 text-gray-900"
          placeholder="jonh doe"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">message</span>
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="jonhdoe@gmail.com"
          className="bg-gray-50 border-gray-300 w-full p-2.5 text-gray-900 rounded-lg"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">message</span>
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="******"
          className="bg-gray-50 border-gray-300 w-full p-2.5 text-gray-900"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">message</span>
        </div>
      </div>

      <div>
        <label
          htmlFor="confirmpassword"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmpassword"
          placeholder="******"
          className="bg-gray-50 border-gray-300 w-full p-2.5 text-gray-900"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">message</span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full text-white bg-red-600 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:opacity-50"
      >
        Register
      </button>
      <p className="text-sm font-light text-gray-500 ">
        Sudah Punya Akun?
        <Link
          className="font-medium pl-1 text-red-500 hover:opacity-50 "
          href={"/login"}
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
