import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./../css/dashboard.css";
import Sidebar from "./Dashboard/sidebar.jsx";

const Dashboard = () => {
  useEffect(() => {
    document.body.setAttribute("spacing", "dashboard");
    return () => {
      document.body.removeAttribute("spacing");
    };
  }, []);
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
