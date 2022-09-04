import type { NextPage } from "next";

const Confirmation: NextPage = () => {
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
              Please click on the link in order to authenticate yourself!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
