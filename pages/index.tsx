import type { NextPage } from "next";
import { useState } from "react";
import axios from "axios";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginHandler = (email: string, password: string) => {
    axios
      .post("/api/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.location.href = "/confirmation";
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center md:flex-row flex-col">
      <div className="flex md:w-1/2 w-full justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-center px-1">
          Two factor authentication
        </h1>
        <p className="text-xl font-normal text-center p-2">
          This is a simple demo app to demonstrate how to implement a two factor
          authentication test flow with cypress
        </p>
      </div>

      <div className="flex md:w-1/2 w-full justify-center items-center flex-col my-5">
        <div className="h-full bg-slate-100 justify-center items-center w-2/3 p-10 rounded-md">
          <h1 className="text-4xl font-bold text-center px-1">Login</h1>
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-xl font-normal text-center p-2"
            >
              E-Mail
            </label>
            <input
              type="text"
              id="email"
              className="border-2 border-gray-300 p-2 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label
              htmlFor="password"
              className="text-xl font-normal text-center p-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-2 border-gray-300 p-2 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
              onClick={() => loginHandler(email, password)}
            >
              Login
            </button>

            {error && (
              <p className="text-red-500 text-center mt-5">
                Username or password is incorrect
              </p>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
