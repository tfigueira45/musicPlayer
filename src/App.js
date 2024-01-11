import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/login" Component={Login} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;