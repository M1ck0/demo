import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "pages/login";
import DashboardLayout from "./layout";
import Register from "../pages/register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
