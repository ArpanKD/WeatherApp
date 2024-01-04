import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <AppHeader title="Weather App" />
      <Home />
    </div>
  );
}

export default App;
