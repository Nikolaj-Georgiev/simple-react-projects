import AuthForm from "./components/AuthForm";
import Header from "./components/Header";
import { AuthContextProvider } from "./store/auth-context";

function App() {
  return (
    <AuthContextProvider>
      <div className="bg-stone-800 min-h-screen py-8">
        <Header />
        <main className="mt-12 text-stone-400">
          <AuthForm />
        </main>
      </div>
    </AuthContextProvider>
  );
}

export default App;
