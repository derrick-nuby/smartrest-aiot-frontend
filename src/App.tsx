import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProviders } from "@/providers/AppProviders";

import {
  HomePage,
  NotFoundPage,

  // auth pages
  LoginPage,
  RegisterPage,
  ForgotPassword,
  ResetPassword,

  // admin pages
  DashBoardHomePage,

  // client pages
  ClientHomePage,
} from '@/pages';

import MainLayout from '@/layouts/MainLayout';
import AdminLayout from '@/layouts/AdminLayout';
import ClientLayout from '@/layouts/ClientLayout';

const App: React.FC = () => {
  return (
    <AppProviders>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />

            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          {/* Admin Protected Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashBoardHomePage />} />
          </Route>

          {/* Client Protected Routes */}
          <Route path="/client" element={<ClientLayout />}>
            <Route index element={<ClientHomePage />} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AppProviders>
  );
};

export default App;