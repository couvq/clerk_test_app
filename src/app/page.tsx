import { auth, currentUser } from "@clerk/nextjs/server";

const Home = async () => {
  const user = await currentUser();
  console.log(user)
  const firstname = user?.firstName;
  return (
    <>
      {
        firstname ? <h1><>Hello {firstname}</></h1> : null
      }
    </>
  );
};

export default Home;
