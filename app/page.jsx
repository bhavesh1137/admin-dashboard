import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col text-lg font-bold p-4">
        Login Page
        <Link className='underline text-sm text-blue-500' href="/login">Login</Link>
        <Link className='underline text-sm text-blue-500' href="/privacy-policy">Privacy Policy</Link>
        <Link className='underline text-sm text-blue-500' href="/terms-and-conditions">Terms and Conditions</Link>
      </div>
    </>
  )
}
