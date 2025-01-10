import { auth, currentUser } from "@clerk/nextjs/server";

const Home = async () => {
  const { userId, getToken } = await auth();
  console.log(userId)
  const token = await getToken();
  console.log(token)
  
  return (
    <>
      Homepage
    </>
  );
};

export default Home;
