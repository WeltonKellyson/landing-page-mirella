import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function Router() {
  return (
    <Routes>
      {/* Página inicial */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Router;
