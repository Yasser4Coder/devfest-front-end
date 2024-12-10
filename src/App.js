import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import LoginForm from "./pages/login/login";
import ConfirmationPage from "./pages/submitcomfirmation";
import CongartPage from "./pages/congratulation/congrat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        {/* this is just for testing routers and see pages ( defaault goal to just view page)*/}
        <Route path="/submitconfirmation" element={<ConfirmationPage />} />
        <Route path="/congrat" element={< CongartPage />} />
      </Routes>
    </div>
  );
}

export default App;
