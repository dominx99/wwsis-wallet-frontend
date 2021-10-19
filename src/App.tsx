import { Routes, Route } from "react-router-dom";
import "./App.scss";
import DashboardPage from "./pages/dashboard/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
