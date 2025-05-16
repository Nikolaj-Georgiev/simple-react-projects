// /components/features/auth/AuthForm.jsx
import { useActionState, useState } from "react";
import { useAuthContext } from "../../../store/auth/authContext";
import Form from "../../ui/Form";
import InputContainer from "../../ui/InputContainer";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function AuthForm() {
  const authCtx = useAuthContext();
  const [authMode, setAuthMode] = useState("login"); // login or signup
  const [error, setError] = useState();

  function handleSwitchAuthMode() {
    setAuthMode((prevMode) => (prevMode === "login" ? "signup" : "login"));
  }

  // Preserved your original action-based pattern
  async function submitAction(prevFormState, formData) {
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

      <div className="flex flex-col gap-3 mt-4">
        <Button type="submit" disabled={isPending}>
          {!isPending && authMode === "login" ? "Login" : "Create User"}
          {isPending && "Submitting..."}
        </Button>

        <Button
          type="button"
          variant="secondary"
          disabled={isPending}
          onClick={handleSwitchAuthMode}
        >
          {authMode === "login"
            ? "Create a new user"
            : "Already have an account? Login"}
        </Button>
      </div>
    </Form>
  );
}

export default AuthForm;
