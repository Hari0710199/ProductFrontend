import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./DashBoard";

function StartPage({ setIsLoggedIn }) {
  const [view, setView] = useState(""); // "login" or "register"

  return (
    <div className="p-6 max-w-md mx-auto">
      {view === "" && (
        <>
          <h1 className="text-xl font-bold mb-4">Welcome</h1>
          <button onClick={() => setView("login")} className="bg-blue-500 text-white p-2 w-full mb-2 rounded">
            Login
          </button>
          <button onClick={() => setView("register")} className="bg-green-500 text-white p-2 w-full rounded">
            Register
          </button>
          <button onClick={() => setView("dashboard")} className="bg-blue-500 text-white p-2 w-full mb-2 rounded">
            DashBoard
          </button>
        </>
      )}

      {view === "login" && <Login setIsLoggedIn={setIsLoggedIn} />}
      {view === "register" && <Register setIsLoggedIn={setIsLoggedIn} />}
       {view === "dashboard" && <Dashboard setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default StartPage;
