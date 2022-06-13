import { logout } from "../../firebase";
import React from "react";

function Logout() {
  return (
    <div>
      <button
        className="text-red-600 bg-white my-1 hover:bg-slate-700"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
