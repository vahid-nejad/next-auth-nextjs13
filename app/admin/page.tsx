import React from "react";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
const page = async () => {
  // console.log({ session });

  return (
    <div className="flex justify-center items-center p-5 text-red-500 text-lg font-bold">
      Admin Protected Page
    </div>
  );
};

export default page;
