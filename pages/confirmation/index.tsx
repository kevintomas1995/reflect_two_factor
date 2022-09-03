import type { NextPage } from "next";
import { useState } from "react";
import axios from "axios";

const Confirmation: NextPage = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = (code: string) => {
    console.log("submitting code", code);
    axios
      .post("/api/confirmation", {
        code,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.location.href = "/success";
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center md:flex-row flex-col">
      <div className="flex md:w-1/2 w-full justify-center items-center flex-col my-5">
        <div className="h-full bg-slate-100 justify-center items-center w-2/3 p-10 rounded-md">
          <h1 className="text-4xl font-bold text-center px-1">Login</h1>
          <div className="flex flex-col">
            <label
              htmlFor="verificationCode"
              className="text-xl font-normal text-center p-2"
            >
              Verification Code
            </label>
            <input
              type="text"
              id="verificationCode"
              className="border-2 border-gray-300 p-2 rounded-md"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
              onClick={() => submitHandler(code)}
            >
              Confirm
            </button>
            {error && <p className="text-red-500 text-center mt-5">Invalid code</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
