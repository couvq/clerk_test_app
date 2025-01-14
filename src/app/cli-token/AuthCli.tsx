"use client";
import React, { useState } from "react";

const getTokenAndRedirect = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  const res = await fetch("/api/cli-token");
  const token = await res.json();
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const redirectUrlString = params.get("redirectUrl") ?? "";
  const redirectUrl = new URL(redirectUrlString);
  redirectUrl.searchParams.append("token", token);
  setLoading(false);
  window.open(redirectUrl, "_self");
};

export const AuthCli = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <h2>Do you want to authorize this CLI?</h2>
      {loading ? (
        "Loading..."
      ) : (
        <button onClick={() => getTokenAndRedirect(setLoading)}>
          Yes, sign me in
        </button>
      )}
    </div>
  );
};
