import { Navigate, Outlet } from 'react-router';

function RequireLogout({ authedUser }) {
  return !authedUser ? <Outlet /> : <Navigate to="/" />;
}

export default RequireLogout;
