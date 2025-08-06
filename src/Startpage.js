import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./DashBoard";

function StartPage({ setIsLoggedIn }) {
  const [view, setView] = useState(""); // "login", "register", or "dashboard"

  const handleBack = () => {
    setView("");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      {view === "" && (
        <>
          <h1 className="text-xl font-bold mb-4 text-center">Welcome</h1>
          <div className="space-y-4">
            <button
              onClick={() => setView("login")}
              className="bg-blue-500 text-white p-2 w-full rounded"
            >
              Login
            </button>
            <button
              onClick={() => setView("register")}
              className="bg-green-500 text-white p-2 w-full rounded"
            >
              Register
            </button>
            <button
              onClick={() => setView("dashboard")}
              className="bg-purple-500 text-white p-2 w-full rounded"
            >
              Dashboard
            </button>
          </div>
        </>
      )}

      {view !== "" && (
        <div>
          <button
            onClick={handleBack}
            className="mb-4 bg-gray-300 text-black p-2 rounded"
          >
            ← Back
          </button>

          {view === "login" && <Login setIsLoggedIn={setIsLoggedIn} />}
          {view === "register" && <Register setIsLoggedIn={setIsLoggedIn} />}
          {view === "dashboard" && <Dashboard setIsLoggedIn={setIsLoggedIn} />}
        </div>
      )}
    </div>
  );
}

export default StartPage;
