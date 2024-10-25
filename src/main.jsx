import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import DemoPage from "./pages/demoPage.jsx";
<<<<<<< HEAD
import "./index.css";
import Home from "./Home.jsx";
import Example from "./pages/example.jsx";
import Sohaib from "./pages/sohaib.jsx";
=======
import AkashPage from "./pages/AkashPage.jsx";
import ShreyasViswanathan from "./pages/shreyasViswanathan.jsx";
import AmeyPage from './pages/AmeyPage.jsx'
import "./index.css";
import Home from "./Home.jsx";
import Example from "./pages/example.jsx";
import Kaley from "./pages/Kaley.jsx";
>>>>>>> 07711e207633bf73eb946eee0f3966118cd51627

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/profile/:name" element={<ProfileRouter />} />
      </Routes>
    </Router>
  </StrictMode>
);

function ProfileRouter() {
  const { name } = useParams();

  switch (name) {
    case "Ryan(Demo)":
      return <DemoPage />;

    // Change <DemoPage /> to your custom profile page, and change the case to your name
    case "Kaley":
      return <Kaley />;
    case "Person2":
      return <DemoPage />;
<<<<<<< HEAD
    case "Person3":
      return <DemoPage />;
    case "Person4":
      return <DemoPage />;
    case "Sohaib":
      return <Sohaib />;
=======
    case "Amey Bhandari":
      return <AmeyPage />;
    case "ShreyasViswanathan":
      return <ShreyasViswanathan />;
    case "Person5":
      return <DemoPage />;
>>>>>>> 07711e207633bf73eb946eee0f3966118cd51627
    case "Person6":
      return <DemoPage />;
    case "Akash Ravandhu":
      return <AkashPage />;
    case "Person8":
      return <DemoPage />;
    case "Person9":
      return <DemoPage />;
    case "Person10":
      return <DemoPage />;
    default:
      return <div>Profile not found</div>;
  }
}
