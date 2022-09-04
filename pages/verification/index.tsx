import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Verification: NextPage = () => {
  const { email, verificationCode } = useRouter().query;

  const [loaded, setLoaded] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (email === "test@test.com" && verificationCode === "12345") {
        setLoaded(true);
        setIsVerified(true);
      } else {
        setLoaded(true);
        setIsVerified(false);
      }
    }, 2000);
  }, [email, verificationCode]);

  return (
    <div className="h-screen flex items-center justify-center md:flex-row flex-col">
      {!loaded && !isVerified && (
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-3xl">
            Verifying the information...
          </h1>
          <span className="text-center mt-5">Please wait a moment</span>
        </div>
      )}
      {isVerified && (
        <div className="flex w-full justify-center items-center flex-col">
          <h1 className="text-4xl font-bold text-center px-1">Success</h1>
          <p className="text-xl font-normal text-center p-2">
            You have successfully logged in
          </p>
        </div>
      )}
      {!isVerified && loaded &&  (
        <div className="flex w-full justify-center items-center flex-col">
          <h1 className="text-4xl font-bold text-center px-1">Oooops....</h1>
          <p className="text-xl font-normal text-center p-2">
            Something went wrong
          </p>
        </div>
      )}
    </div>
  );
};

export default Verification;
