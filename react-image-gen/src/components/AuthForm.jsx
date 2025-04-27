import { useState } from "react";
import Form from "./Form";
import InputContainer from "./InputContainer";

function AuthForm() {
  const [authMode, setAuthMode] = useState("login"); // login or signup

  function handleSwitchAuthMode() {
    setAuthMode((prevMode) => (prevMode === "login" ? "signup" : "login"));
  }

  return (
    <Form className="max-w-[25rem] mx-auto">
      <InputContainer>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </InputContainer>
      <p className="flex flex-col gap-3 mt-4">
        <button>Submit</button>
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
