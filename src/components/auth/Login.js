import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return console.log("yo");
    }
    if (user) {
      navigate("/dashboard");
    }
  }, [user, loading]);
  return (
    <div>
      <div className="flex flex-col ">
        <label className="font-bold text-2xl">Email</label>
        <input
          className="py-2 px-3 mb-2 border-2 border-black"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-col ">
        <label className="font-bold text-2xl">Password</label>
        <input
          className="py-2 px-3 mb-2 border-2 border-black"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="mb-10">
        <button
          onClick={signInWithGoogle}
          className="text-white bg-black w-full py-2 rounded-sm"
        >
          Login with Google
        </button>
      </div>
      <div className="mb-10">
        <button
          onClick={logInWithEmailAndPassword}
          className="text-white bg-black w-full py-2 rounded-sm"
        >
          Login with Email
        </button>
      </div>
      <div>
        <Link to="/reset">Forgot Passewrd?</Link>
      </div>
      <div>
        Don't have an account? <Link to="/register">Register</Link> now.
      </div>
    </div>
  );
}

export default Login;
