import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Outlet className="min-h-screen" />
      <Footer />
    </>
  );
}

export default App;
