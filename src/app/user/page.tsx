import { auth } from "@clerk/nextjs/server";
import React from "react";

const UserPage = async () => {
  const { getToken } = await auth();
  const token = await getToken();
  const fetchOptions = {
    headers: {
      Authorization: token,
    },
  };
  // @ts-ignore
  const res = await fetch("http://localhost:5000/user", fetchOptions);
  const userResponse = await res.text();
  return <div>{userResponse}</div>;
};

export default UserPage;
