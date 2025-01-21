// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Trading from './pages/Trading';
import Login from './pages/Login';
import Register from './pages/Register';
import EmailVerify from './components/Auth/Register/EmailVerify';
import CreatePassword from './components/Auth/Register/CreatePassword';
import Welcome from './components/Auth/Register/Welcome';
import EnterPassword from './components/Auth/Login/EnterPassword';
import VerifyEmail from './components/Auth/Login/VerifyEmail';
import ResetPassword from './components/Auth/Login/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/trading" element={<Trading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/enter-password" element={<EnterPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;