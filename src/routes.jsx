import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "./components/pages/Home";
import ProductPage from "./components/pages/Product";
import OutletPage from "./components/pages/Outlet";
import SignUpPage from "./components/pages/auth/SignUp";
import LoginPage from "./components/pages/auth/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

const RooteLayout = () => {
  return (
    <main className="bg-neutral-800 min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RooteLayout />}>
      <Route index path="" element={<HomePage />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="outlets" element={<OutletPage />} />

      <Route path="auth">
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Route>
  )
);

export default Router;
