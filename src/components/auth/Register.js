import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();

  const register = () => {
    if (!name) {
      alert("Enter your name!!");
    }
    registerWithEmailAndPassword(name, email, password);

    console.log(" here");
  };

  useEffect(() => {
    if (loading) {
      //
      return;
    }
    if (user) history("/dashboard");
  }, [user, loading]);
  return (
    <div>
      <div className="flex flex-col ">
        <label className="font-bold text-2xl">Name</label>
        <input
          className="py-2 px-3 mb-2 border-2 border-black"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
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
          Register with Google
        </button>
      </div>
      <div className="mb-10">
        <button
          onClick={register}
          className="text-white bg-black w-full py-2 rounded-sm"
        >
          Register with Email
        </button>
      </div>
      <div>
        <Link to="/reset">Forgot Passewrd?</Link>
      </div>
      <div>
        Already thave an account? <Link to="/">Login</Link> now.
      </div>
    </div>
  );
}

export default Register;
