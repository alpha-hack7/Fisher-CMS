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
import { logout } from "../../../api/logout";
import Loader from "../../../components/loader";

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
      <LogOut size={20} className="text-sidebar_icons" onClick={handleLogout} />
    ),
  };
  const Links = [
    {
      id: 1,
      label: "Dashboard",
      to: "/dashboard",
      icon: <Grid size={20} className="text-sidebar_icons" />,
    },
    {
      id: 2,
      label: "Drafts",
      to: "/dashboard/drafts",
      icon: <Edit size={20} className="text-sidebar_icons" />,
    },
    {
      id: 3,
      label: "Videos",
      to: "/dashboard/videos",
      icon: <PlayCircle size={20} className="text-sidebar_icons" />,
    },
    {
      id: 4,
      label: "Posts",
      to: "/dashboard/posts",
      icon: <Copy size={20} className="text-sidebar_icons" />,
    },
  ];
  if (loading) return <Loader />;
  const fullNav = (
    <div className="min-w-12 mx-auto max-w-max mt-4 flex flex-col gap-4">
      {Links.map((link) => (
        <div
          className="cursor-pointer flex items-center gap-4 py-2 px-4"
          onClick={() => navigate(link.to)}
          key={link.id}
        >
          <Fragment>{link.icon}</Fragment>
          <span>{link.label}</span>
        </div>
      ))}
    </div>
  );
  const full_logout = (
    <div className="group/logout cursor-pointer flex items-center gap-4 relative py-2 px-4">
      <Fragment>{Logout.icon}</Fragment>
      <span>{Logout.label}</span>
    </div>
  );
  const icon_logout = (
    <div className="group/logout cursor-pointer flex items-center gap-4 relative py-2 px-4">
      <Fragment>{Logout.icon}</Fragment>
      <span className="group-hover/logout:opacity-100 group-hover/logout:translate-y-[-50%] absolute bg-tag text-olive-400 border border-border-color left-full top-[50%] opacity-0 py-1 px-2">
        {Logout.label}
      </span>
    </div>
  );

  const iconsNav = (
    <div className="w-15 mx-auto mt-4 flex flex-col gap-4">
      {Links.map((link) => (
        <div
          className="group/menu-div cursor-pointer flex items-center gap-4 py-2 px-4 relative"
          onClick={() => navigate(link.to)}
          key={link.id}
        >
          <Fragment>{link.icon}</Fragment>
          <span className="group-hover/menu-div:opacity-100 group-hover/menu-div:translate-y-[-50%] absolute bg-tag text-olive-400 border border-border-color left-12 top-[50%] opacity-0 py-1 px-2">
            {link.label}
          </span>
        </div>
      ))}
    </div>
  );
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <aside className="bg-sidebar w-fit border-r-2 border-secondary h-dvh pt-4 flex-col flex gap-4 fixed sm:static z-100 justify-between max-h-dvh">
      <section className="h-dvh flex flex-col justify-between items-center">
        <div className="flex flex-col items-center gap-4">
          <ArrowLeftCircle
            size={20}
            className="text-sidebar_icons "
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
      <button className="flex justify-center" onClick={toggleSidebar}>
        {open ? <ChevronsLeft size={30} /> : <ChevronsRight size={30} />}
      </button>
    </aside>
  );
};

export default Sidebar;
