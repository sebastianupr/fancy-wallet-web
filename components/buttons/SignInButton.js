import { GrGoogle } from "react-icons/gr"

export default function SignInButton ({ onClick }) {
  return (
    <button
      className="px-7 py-3 bg-purple rounded-xl text-white"
      onClick={onClick}
    >
      <GrGoogle className="inline-block mb-1 mr-1" /> Sign in with Google
    </button>
  )
}
