import "./App.css";
import LandingPage from "./components/container/LandingPage/Landing";
import AuthorizationPage from "./components/container/Authorization/Authorization";

function App() {
  return (
    <div className="App">
      <LandingPage></LandingPage>
      <AuthorizationPage></AuthorizationPage>
    </div>
  );
}

export default App;
