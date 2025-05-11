import { useAuthContext } from "../../store/auth/authContext";
import Button from "../ui/Button";

function Header() {
  const { token, logout } = useAuthContext();

  return (
    <header className="text-center text-stone-50">
      <h1 className="font-bold text-3xl font-mono">
        Reactlicate image generator
      </h1>

      {token && (
        <Button variant="secondary" className="mt-2" onClick={logout}>
          Logout
        </Button>
      )}
    </header>
  );
}

export default Header;
