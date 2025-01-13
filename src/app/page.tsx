import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const Home = async () => {
  const { userId, getToken } = await auth();
  console.log(userId);
  const token = await getToken();
  console.log(token);

  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      Homepage
    </>
  );
};

export default Home;
