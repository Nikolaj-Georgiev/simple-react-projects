import { useAuthContext } from "../store/auth-context";

function Header() {
  const { token, logout } = useAuthContext();
  return (
    <header className="text-center text-stone-50">
      <h1 className="font-bold text-3xl font-mono">
        Reactlicate image generator
      </h1>
      {token && (
        <button
          className="mt-2 text-stone-200  hover:text-stone-400 transition-colors duration-200"
          onClick={logout}
        >
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;
