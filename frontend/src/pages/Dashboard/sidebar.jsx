import { Fragment, useState } from "react";
import {
  ArrowLeftCircle,
  ChevronsLeft,
  ChevronsRight,
  DollarSign,
  Edit,
  FileText,
  Grid,
  LogOut,
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
    icon: <LogOut size={20} color="var(--text)" onClick={handleLogout} />,
  };
  const Links = [
    {
      id: 1,
      label: "Dashboard",
      to: "/dashboard",
      icon: <Grid color="var(--text)" />,
    },
    {
      id: 2,
      label: "Drafts",
      to: "/dashboard/drafts",
      icon: <Edit color="var(--text)" />,
    },
    {
      id: 3,
      label: "Videos",
      to: "/dashboard/videos",
      icon: <FileText color="var(--text)" />,
    },
    {
      id: 4,
      label: "Posts",
      to: "/dashboard/posts",
      icon: <DollarSign color="var(--text)" />,
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
      <Fragment>{LogOut.icon}</Fragment>
      <span className="tag">{LogOut.label}</span>
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
