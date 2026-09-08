import { Fragment, useState } from "react";
import {
  ArrowLeftCircle,
  ChevronsLeft,
  ChevronsRight,
  Copy,
  Edit,
  Grid,
  LogOut,
  PlayCircle,
} from "react-feather";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../api/logout";
import Loader from "../../sections/components/loader";
import "./css/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      toast.success("Successfully logged out!");
      navigate("/");
    } catch (error) {
      toast.error(error || "Something wrong happened");
    } finally {
      setLoading(false);
    }
  };
  const Logout = {
    label: "Logout",
    icon: (
      <LogOut size={20} color="var(--sidebar_icons)" onClick={handleLogout} />
    ),
  };
  const Links = [
    {
      id: 1,
      label: "Dashboard",
      to: "/dashboard",
      icon: <Grid size={20} color="var(--sidebar_icons)" />,
    },
    {
      id: 2,
      label: "Drafts",
      to: "/dashboard/drafts",
      icon: <Edit size={20} color="var(--sidebar_icons)" />,
    },
    {
      id: 3,
      label: "Videos",
      to: "/dashboard/videos",
      icon: <PlayCircle size={20} color="var(--sidebar_icons)" />,
    },
    {
      id: 4,
      label: "Posts",
      to: "/dashboard/posts",
      icon: <Copy size={20} color="var(--sidebar_icons)" />,
    },
  ];
  if (loading) return <Loader />;
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
  const full_logout = (
    <div className="logout">
      <Fragment>{Logout.icon}</Fragment>
      <span>{Logout.label}</span>
    </div>
  );
  const icon_logout = (
    <div className="logout">
      <Fragment>{Logout.icon}</Fragment>
      <span className="tag">{Logout.label}</span>
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
        <div>
          <ArrowLeftCircle
            size={25}
            color="var(--sidebar_icons)"
            onClick={() => navigate(-1)}
          />
          <div>
            {open ? (
              <Fragment>{fullNav}</Fragment>
            ) : (
              <Fragment>{iconsNav}</Fragment>
            )}
          </div>
        </div>
        <div>
          {open ? (
            <Fragment>{full_logout}</Fragment>
          ) : (
            <Fragment>{icon_logout}</Fragment>
          )}
        </div>
      </section>
      <button className="minimize-sidebar" onClick={toggleSidebar}>
        {open ? <ChevronsLeft size={30} /> : <ChevronsRight size={30} />}
      </button>
    </aside>
  );
};

export default Sidebar;
