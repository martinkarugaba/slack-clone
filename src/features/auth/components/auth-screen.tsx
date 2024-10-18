"use client";

import { useState } from "react";

import { SignInFlow } from "../types";

import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");

  return (
    <div className="bg-slack flex h-full items-center justify-center">
      <div className="md-w-[420px] md:h-auto">
        {state === "signIn" ? <SignInCard /> : <SignUpCard />}
      </div>
    </div>
  );
};

export default AuthScreen;
