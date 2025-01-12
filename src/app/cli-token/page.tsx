import { SignedIn, SignedOut, SignIn, SignInButton } from "@clerk/nextjs";
import React from "react";
import { AuthCli } from "./AuthCli";

export default async function Page({ searchParams }: any) {
  const { redirectUrl } = await searchParams;
  return (
    <div>
      <SignedOut>
        <SignInButton
          fallbackRedirectUrl={`/cli-token?redirectUrl=${redirectUrl}`}
        />
        {/* <SignIn redirectUrl={`/cli-token?redirectUrl=${searchParams.redirectUrl}`} /> */}
      </SignedOut>
      <SignedIn>
        <AuthCli />
      </SignedIn>
    </div>
  );
}
