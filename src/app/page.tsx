import Link from "next/link";

export default function Home() {
  return (
    <center>
      <h1 className="text-2xl font-bold my-4">NEXT 13 USER SIGN IN AND SIGN UP</h1>
      <div className="border rounded-lg w-fit px-2 py-1">
        <Link href="/signin">Click To Login</Link>
      </div>
    </center>
  );
}
