import { useAuth } from './AuthContext';
import '../pages/dashboard.style.css';

export default function Dashboard() {
  const { logout } = useAuth();
  return (
    <div className="dashboard">
      <h1>org Tracking Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
