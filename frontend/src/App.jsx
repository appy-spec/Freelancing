import "./Login.css";
import Landingpage from "./Pages/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import Homepage_Admin from "./Pages/Homepage_Admin";
import Profile_Page from "./Pages/Profile_Page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/homepage_admin" element={<Homepage_Admin />} />
        <Route path="/profile_page"element={<Profile_Page/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
