import AuthForm from "./components/AuthForm";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-stone-800 min-h-screen py-8">
      <Header />
      <main className="mt-12 text-stone-400">
        <AuthForm />
      </main>
    </div>
  );
}

export default App;
