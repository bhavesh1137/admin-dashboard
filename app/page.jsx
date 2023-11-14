"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      router.push("/dashboard")
    } else {
      router.push("/")
    }
  }, [])

  return (
    <>
      <div className="flex flex-col text-lg font-bold p-4">
        Home Page
        <Link className="font-normal underline text-blue-400" href={"/login"}>Login</Link>
      </div>
    </>
  )
}

