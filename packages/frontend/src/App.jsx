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
import UpdateAttendancePage from "./pages/UpdateAttendance";
import ViewAttendancePage from "./pages/ViewAttendance";

const App = () => {

  /* 
    Possibly change the base path to attendance page
  */
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LoginPage />} />

        <Route path="/attendance" element={<Layout />}>
          <Route index element={<AttendancePage />} />
        </Route>

        <Route path="/admin_dashboard" element={<AdminLayout />}>
          <Route path="/admin_dashboard/manage_employees" element={<ManageUsersPage />} />
          <Route path="/admin_dashboard/view_attendance" element={<UpdateAttendancePage />} />
          <Route path="/admin_dashboard/update_attendance" element={<ViewAttendancePage />} />
        </Route>

        <Route path="/forgot_password" element={<ForgotPasswordPage />} />
        <Route path="/reset_password" element={<ResetPasswordPage />} />

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
