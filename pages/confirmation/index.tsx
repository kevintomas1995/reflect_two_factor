import type { NextPage } from "next";
// import { useState } from "react";
// import axios from "axios";

const Confirmation: NextPage = () => {
  //   const submitHandler = (code: string) => {
  //     console.log("submitting code", code);
  //     axios
  //       .post("/api/confirmation", {
  //         code,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         if (res.status === 200) {
  //           window.location.href = "/success";
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setError(true);
  //       });
  //   };

  return (
    <div className="h-screen flex items-center justify-center md:flex-row flex-col">
      <div className="flex  w-full justify-center items-center flex-col my-5">
        <div className="h-full justify-center items-center w-2/3 p-10 rounded-md">
          <h1 className="text-4xl font-bold text-center px-1">
            Check your mails!
          </h1>
          <div className="flex flex-col">
            <span className="text-center mt-5">
              An e-mail containing a confirmation link has been sent to you.
              Please click on the link in order to authenticate yourself
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
