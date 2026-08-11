import { Fragment, useState } from "react";
import {
  FiArrowLeftCircle,
  FiChevronsLeft,
  FiChevronsRight,
  FiDollarSign,
  FiEdit,
  FiFileText,
  FiGrid,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./css/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const Links = [
    {
      id: 1,
      label: "Dashboard",
      to: "/dashboard",
      icon: <FiGrid color="var(--text)" />,
    },
    {
      id: 2,
      label: "Drafts",
      to: "/dashboard/drafts",
      icon: <FiEdit color="var(--text)" />,
    },
    {
      id: 3,
      label: "Videos",
      to: "/dashboard/videos",
      icon: <FiFileText color="var(--text)" />,
    },
    {
      id: 4,
      label: "Posts",
      to: "/dashboard/posts",
      icon: <FiDollarSign color="var(--text)" />,
    },
  ];
  const fullNav = (
    <div className="menu">
      {Links.map((link) => (
        <div onClick={() => navigate(link.to)} key={link.id}>
          <Fragment>{link.icon}</Fragment>
          <span>{link.label}</span>
        </div>
      ))}
    </div>
  );

  const iconsNav = (
    <div className="menu">
      {Links.map((link) => (
        <div onClick={() => navigate(link.to)} key={link.id}>
          <Fragment>{link.icon}</Fragment>
          <span className="tag">{link.label}</span>
        </div>
      ))}
    </div>
  );

  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <aside className="sidebar">
      <section>
        <FiArrowLeftCircle
          size={30}
          color="var(--text)"
          onClick={() => navigate(-1)}
        />
        <div>
          {open ? (
            <Fragment>{fullNav}</Fragment>
          ) : (
            <Fragment>{iconsNav}</Fragment>
          )}
        </div>
      </section>
      <button className="minimize-sidebar" onClick={toggleSidebar}>
        {open ? <FiChevronsLeft size={30} /> : <FiChevronsRight size={30} />}
      </button>
    </aside>
  );
};

export default Sidebar;
