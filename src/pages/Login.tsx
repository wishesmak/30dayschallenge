import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { signIn, currentUser } = useAuth();

  if (currentUser) return <></>;

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        onClick={signIn}
        className="flex items-center gap-2 px-4 py-2 transition hover:text-violet-600 hover:border-2 hover:border-violet-600"
      >
        <FaGoogle /> Sign in with Google
      </button>
    </div>
  );
};

export default Login;
