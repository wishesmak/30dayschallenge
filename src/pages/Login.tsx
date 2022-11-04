import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { signIn } = useAuth();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button onClick={signIn} className="flex items-center gap-2">
        <FaGoogle /> Sign in with Google
      </button>
    </div>
  );
};

export default Login;
