import Footer from "./components/Footer/Footer";
import Nav from "./components/Navbar/Nav.jsx";
import { Outlet } from "react-router-dom";
import Gotop from "./components/goToTopButton/Gotop";
const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Gotop />
      <Footer />
    </>
  );
};

export default App;
