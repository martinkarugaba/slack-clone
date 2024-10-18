import { useState } from "react";
import { SignInFlow } from "../types";

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>()
  
  return <div>AuthScreen</div>;
};

export default AuthScreen;
