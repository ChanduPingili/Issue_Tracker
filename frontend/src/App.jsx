import './App.css';
import { BrowserRouter as Router  , Routes, Route , Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Devregiser from './pages/developer/developerlog';
import Login from './pages/org/Login';
import DeveloperLogin from './pages/developer/developerlogin'
import Register from './pages/org/Register';
import LandingPage from './pages/LandingPage';
import Userregister from './pages/user/Userlog'
import Userlogin from './pages/user/Userlogin'
import axios from 'axios';
import Dashboard from './pages/DashBoard'
import { AuthProvider } from './pages/AuthContext';
import PrivateRoute from './pages/PrivateRoute'
import { Toaster } from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

// function PrivateRoute({ children }) {
//   const token = localStorage.getItem('token');
//   return token ? children : <Navigate to="/login" />;
// }

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/developerlog" element={<Devregiser />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/developerlogin" element={<DeveloperLogin/>}/>
        <Route path="/Userlog" element={<Userregister/>}/>
        <Route path="/Userlogin" element={<Userlogin/>}/>
        <Route path="/DashBoard" element={
          <PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path='/' element={<Login/>}/>
      </Routes>
    </AuthProvider  >
  );
}

export default App;
 