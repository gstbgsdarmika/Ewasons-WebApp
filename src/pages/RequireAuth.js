import { Navigate, Outlet } from 'react-router';

function RequireAuth({ authedUser }) {
  console.log(authedUser);
  return authedUser ? <Outlet /> : <Navigate to="/login" />;
}

export default RequireAuth;
