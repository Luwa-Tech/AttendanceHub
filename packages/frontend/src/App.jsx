import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/Login";
import Layout from "./component/Layout";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/Home";
import ForgotPasswordPage from "./pages/ForgotPassword";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LoginPage />}>
        <Route path="/forgot_password" element={<ForgotPasswordPage />} />

        <Route path="/attendance" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>

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
