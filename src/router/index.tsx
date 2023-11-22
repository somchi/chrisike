import { Routes, Route, HashRouter } from 'react-router-dom';
import App from '../App';
import AdminHome from '../pages/admin';
import AddDesign from '../pages/admin/design';
import AddVideo from '../pages/admin/video';
import AddUser from '../pages/admin/user';
import AddReview from '../pages/admin/review';
import {
  ADD_USER,
  ADMIN_HOME,
  CLEINT_REVIEW,
  DESIGN,
  LOGIN,
  VIDEO,
} from '../_libs/site-navigation';
import { ProtectedRoute } from './protectedRoute';
import Login from '../pages/admin/auth/login';

export const Routers = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={LOGIN.href} element={<Login />} />
        <Route
          path={ADMIN_HOME.href}
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path={DESIGN.href}
          element={
            <ProtectedRoute>
              <AddDesign />
            </ProtectedRoute>
          }
        />
        <Route
          path={VIDEO.href}
          element={
            <ProtectedRoute>
              <AddVideo />
            </ProtectedRoute>
          }
        />
        <Route
          path={ADD_USER.href}
          element={
            <ProtectedRoute>
              <AddUser />
            </ProtectedRoute>
          }
        />
        <Route
          path={CLEINT_REVIEW.href}
          element={
            <ProtectedRoute>
              <AddReview />
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
};
