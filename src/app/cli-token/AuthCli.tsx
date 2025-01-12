"use client";
import React from "react";

export const AuthCli = () => {
  const getTokenAndRedirect = async () => {
    const res = await fetch("/api/cli-token");
    const token = await res.json();
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const redirectUrlString = params.get("redirectUrl") ?? "";
    const redirectUrl = new URL(redirectUrlString)
    redirectUrl.searchParams.append('token', token)
    window.open(redirectUrl)
  };

  return (
    <div>
      <h2>Do you want to authorize this CLI?</h2>
      <button onClick={getTokenAndRedirect}>Yes, sign me in</button>
    </div>
  );
};
