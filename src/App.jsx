import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="container mx-auto space-y-4">
        <NavBar />
        <Outlet className="min-h-screen" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
