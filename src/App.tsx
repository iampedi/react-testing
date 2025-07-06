import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { UserInfo } from "./components/UserInfo";

function App() {
  return (
    <div className="App">
      <p>This is a test app.</p>
      <LoginForm />

      <UserInfo />
    </div>
  );
}

export default App;
