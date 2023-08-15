import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <center className="mt-10">
      <h1 className="text-2xl font-bold mb-20 ">SIGN IN</h1>
      <form action="" className="space-y-6">
        <div className="flex gap-x-6 items-center justify-between max-w-sm mx-auto">
          <div>Email</div>
          <input type="text" className="border rounded-md px-2 py-[.10rem]" />
        </div>
        <div className="flex gap-x-6 items-center justify-between max-w-sm mx-auto">
          <div>Password</div>
          <input
            type="password"
            className="border rounded-md px-2 py-[.10rem]"
          />
        </div>
      </form>
      <div className="my-16 border w-fit p-1 rounded-lg">
        <Link href="/">Back To Home Page</Link>
      </div>
    </center>
  );
}
