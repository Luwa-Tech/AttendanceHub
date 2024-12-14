import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import LoginPage from "./pages/Login";
import Layout from "./component/Layout";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/Home";

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LoginPage />} />

        <Route path="/attendance" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
