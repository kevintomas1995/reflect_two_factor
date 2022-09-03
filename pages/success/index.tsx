import type { NextPage } from "next";

const Success: NextPage = () => {

  return (
    <div className="h-screen flex items-center justify-center md:flex-row flex-col">
        <div className="flex md:w-1/2 w-full justify-center items-center flex-col">
            <h1 className="text-4xl font-bold text-center px-1">Success</h1>
            <p className="text-xl font-normal text-center p-2">You have successfully logged in</p>
        </div>
    </div>
  );
};

export default Success;
