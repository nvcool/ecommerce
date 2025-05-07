import { Route, Routes } from "react-router";
import { AppLayout } from "./components/layout/AppLayout";
import { Home } from "./components/Home/Home";
import { Dashboard } from "./components/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
