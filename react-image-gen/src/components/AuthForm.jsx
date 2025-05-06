import { useActionState, useState } from "react";
import Form from "./Form";
import InputContainer from "./InputContainer";
import Label from "./Label";
import Input from "./Input";
import { useAuthContext } from "../store/auth-context";

function AuthForm() {
  const authCtx = useAuthContext();
  const [authMode, setAuthMode] = useState("login"); // login or signup
  const [error, setError] = useState();

  function handleSwitchAuthMode() {
    setAuthMode((prevMode) => (prevMode === "login" ? "signup" : "login"));
  }

  async function submitAction(prevFormState, formData) {
    // prevFormState is the previous form state it is left for reference, formData is the new form data
    setError(null);
    const email = formData.get("email");
    const password = formData.get("password");
    const honeypot = formData.get("honeypot");
    if (honeypot) {
      setError("Spam detected! Please try again.");
      return;
    }
    try {
      if (authMode === "signup") {
        await authCtx.signup(email, password);
      } else {
        await authCtx.login(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  const [, action, isPending] = useActionState(submitAction);

  return (
    <Form action={action} className="max-w-[25rem] mx-auto">
      <InputContainer>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" required />
      </InputContainer>
      <InputContainer className={"honeypot"} name="honeypot">
        <Label htmlFor="honeypot" className={"honeypot"}>
          honeypot
        </Label>
        <Input
          type="text"
          id="honeypot"
          name="honeypot"
          className={"honeypot"}
        />
      </InputContainer>
      {error && <p className="text-red-300 text-sm mt-3">{error}</p>}
      <p className="flex flex-col gap-3 mt-4">
        <button
          disabled={isPending}
          className="bg-sky-400 py-2 text-black rounded-md hover:bg-sky-500 transition-colors duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed disabled:text-stone-600"
        >
          {!isPending && authMode === "login" ? "Login" : "Create User"}
          {isPending && "Submitting..."}
        </button>
        <button
          disabled={isPending}
          type="button"
          onClick={handleSwitchAuthMode}
        >
          {authMode === "login"
            ? "Create a new user"
            : "Already have an account? Login"}
        </button>
      </p>
    </Form>
  );
}

export default AuthForm;
