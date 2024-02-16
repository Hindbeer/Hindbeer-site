import "./App.css";
import ProjectPages from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename="/Hindbeer-site/">
      <Routes>
        <Route path="/projects" element={<ProjectPages />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
