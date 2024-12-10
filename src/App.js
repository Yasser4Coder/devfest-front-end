import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import LoginForm from "./pages/login/login";
import ConfirmationPage from "./pages/submitcomfirmation";
import CongartPage from "./pages/congratulation/congrat";
import CameraAccess from "./pages/cameraAccess";
import Admin from "./pages/admin/admin";
import Home2 from "./pages/home2/Home2";

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
        <Route path="/accescamera" element={< CameraAccess />} />
        
        <Route path="/admin" element={< Admin />} />
        <Route path="/home2" element={< Home2 />} />

      </Routes>
    </div>
  );
}

export default App;
