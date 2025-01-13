import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Home = async () => {
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
