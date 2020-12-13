import "./App.css";
import LandingPage from "./components/LandingPage/Landing";
import AuthorizationPage from "./components/Authorization/Authorization";

function App() {
  return (
    <div className="App">
      <LandingPage></LandingPage>
      <AuthorizationPage></AuthorizationPage>
    </div>
  );
}

export default App;
