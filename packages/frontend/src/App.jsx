import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/Login";
import Layout from "./component/Layout";
import PageNotFound from "./pages/PageNotFound";
import ForgotPasswordPage from "./pages/ForgotPassword";
import ResetPasswordPage from "./pages/ResetPassword";
import AdminLayout from "./component/admin/AdminLayout";
import ManageUsersPage from "./pages/ManageUsers";
import AttendancePage from "./pages/Attendance";
import ViewAttendancePage from "./pages/ViewAttendance";
import ProtectedRoute from "./component/ProtectedRoute";

const App = () => {

  /* 
    Possibly change the base path to attendance page
  */
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LoginPage />} />


        <Route element={<ProtectedRoute />}>
          <Route path="/attendance" element={<Layout />}>
            <Route index element={<AttendancePage />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<ManageUsersPage />} />
            <Route path="/admin/view_attendance" element={<ViewAttendancePage />} />
          </Route>
        </Route>

        <Route path="/forgot_password" element={<ForgotPasswordPage />} />
        <Route path="/reset_password/:token" element={<ResetPasswordPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )

}

export default App
