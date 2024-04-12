// import Header from "./components/Header";
// import HeroSection from "./components/sections/HeroSection";
// import Footer from "./components/Footer";

// <main className="bg-neutral-800 min-h-screen">
//   <Header />
//   <HeroSection />
//   <Footer />
// </main>

import { RouterProvider } from "react-router-dom";
import Router from "./routes";
const App = function () {
  return <RouterProvider router={Router} />;
};

export default App;
