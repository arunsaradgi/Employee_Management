import { Route, Routes } from "react-router-dom";
import { Landing } from "../Pages/Landing";
import { Dashboard } from "../Pages/Dashboard";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};
