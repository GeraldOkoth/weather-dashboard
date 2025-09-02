import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Dashboard from "./pages/Dashboard";
import ErrorMessage from './pages/ErrorMessage';
import ResetPassword from './pages/ResetPassword';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/error" element={<ErrorMessage />} />
        <Route path="/forgot" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App
