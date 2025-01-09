import { auth } from "@clerk/nextjs/server";

const Home = async () => {
  const { sessionClaims } = await auth();
  const firstname = sessionClaims?.firstname;

  return (
    <>
      {
        firstname ? <h1><>Hello {firstname}</></h1> : null
      }
    </>
  );
};

export default Home;
