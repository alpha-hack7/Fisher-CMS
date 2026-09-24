import { BrowserRouter, Route, Routes } from "react-router-dom";
// Public Routes
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Advertisements from "./pages/Advertisements";
import Login from "./pages/login";
import Forgot_password from "./pages/forgot_password";
import Dashboard from "./pages/Dashboard";
// Private Routes
import Home_dashboard from "./pages/sections/dashboard_sections/home_dashboard";
import Drafts_page from "./pages/sections/dashboard_sections/drafts_page";
import Videos_Layout from "./pages/sections/dashboard_sections/videos/Videos_Layout";
import Videos_page from "./pages/sections/dashboard_sections/videos/videos_page";
import Upload_video from "./pages/sections/dashboard_sections/videos/upload_video";
import Posts_Layout from "./pages/sections/dashboard_sections/posts/Posts_Layout";
import Posts_page from "./pages/sections/dashboard_sections/posts/posts_page";
import Make_post from "./pages/sections/dashboard_sections/posts/make_post";
import NotFound from "./pages/NotFound";

function Fisher_CMS() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-videos" element={<Cars />} />
        <Route path="/advertisement" element={<Advertisements />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot_password />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home_dashboard />} />
          <Route path="drafts" element={<Drafts_page />} />
          <Route path="videos" element={<Videos_Layout />}>
            <Route index element={<Videos_page />} />
            <Route path="upload-video" element={<Upload_video />} />
          </Route>
          <Route path="posts" element={<Posts_Layout />}>
            <Route index element={<Posts_page />} />
            <Route path="make-post" element={<Make_post />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Fisher_CMS;
