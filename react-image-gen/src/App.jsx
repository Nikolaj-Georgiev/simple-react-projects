import { useAuthContext } from "./store/auth/authContext";
import Header from "./components/layout/Header";
import AuthForm from "./components/features/auth/AuthForm";
import ImageGeneration from "./components/features/imageGeneration/ImageGeneration";

function App() {
  const { token } = useAuthContext();

  return (
    <div className="bg-stone-800 min-h-screen py-8">
      <Header />
      <main className="mt-12 text-stone-400">
        {!token ? <AuthForm /> : <ImageGeneration />}
      </main>
    </div>
  );
}

export default App;
