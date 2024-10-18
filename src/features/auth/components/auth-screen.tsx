"use client";

import { useState } from "react";

import { SignInFlow } from "../types";

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");

  return (
    <div className="flex h-full items-center justify-center bg-[#5C3B58]">
      <div className="md-w-[120px] md:h-auto">
        AuthScreen
      </div>
    </div>
  );
};

export default AuthScreen;
