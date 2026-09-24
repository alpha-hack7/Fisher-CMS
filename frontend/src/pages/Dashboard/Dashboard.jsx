import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar.jsx";

const Dashboard = () => {
  useEffect(() => {
    document.body.setAttribute("spacing", "dashboard");
    return () => {
      document.body.removeAttribute("spacing");
    };
  }, []);
  return (
    <div className="flex gap-4 overflow-hidden h-dvh max-h-100dvh">
      <Sidebar />
      <main className="flex-1 p-4 flex flex-col justify-start text-left fixed left-13.75 w-9/10 sm:static overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
