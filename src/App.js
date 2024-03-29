import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/settings" Component={Settings} />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
