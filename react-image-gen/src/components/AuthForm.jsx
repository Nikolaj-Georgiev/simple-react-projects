import { useState } from "react";
import Form from "./Form";
import InputContainer from "./InputContainer";
import Label from "./Label";
import Input from "./Input";

function AuthForm() {
  const [authMode, setAuthMode] = useState("login"); // login or signup

  function handleSwitchAuthMode() {
    setAuthMode((prevMode) => (prevMode === "login" ? "signup" : "login"));
  }

  return (
    <Form className="max-w-[25rem] mx-auto">
      <InputContainer>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">Password:</Label>
        <Input type="password" id="password" name="password" required />
      </InputContainer>
      <p className="flex flex-col gap-3 mt-4">
        <button className="bg-sky-400 py-2 text-black rounded-md hover:bg-sky-500 transition-colors duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed disabled:text-stone-600">
          {authMode === "login" ? "Login" : "Create User"}
        </button>
        <button type="button" onClick={handleSwitchAuthMode}>
          {authMode === "login"
            ? "Create a new user"
            : "Already have an account? Login"}
        </button>
      </p>
    </Form>
  );
}

export default AuthForm;
