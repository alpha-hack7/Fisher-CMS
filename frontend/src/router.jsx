import { BrowserRouter, Route, Routes } from "react-router-dom";
import Advertisements from "./pages/Advertisements";
import Cars from "./pages/Cars";
import Dashboard from "./pages/Dashboard/Dashboard";
import Drafts_page from "./pages/Dashboard/drafts_page";
import Home_dashboard from "./pages/Dashboard/home_dashboard";
import Make_post from "./pages/Dashboard/make_post";
import Posts from "./pages/Dashboard/Posts";
import Posts_page from "./pages/Dashboard/posts_page";
import Upload_video from "./pages/Dashboard/upload_video";
import Videos from "./pages/Dashboard/Videos";
import Videos_page from "./pages/Dashboard/videos_page";
import Forgot_password from "./pages/forgot_password";
import Home from "./pages/Home/Home";
import Login from "./pages/login";
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
          <Route path="videos" element={<Videos />}>
            <Route index element={<Videos_page />} />
            <Route path="upload-video" element={<Upload_video />} />
          </Route>
          <Route path="posts" element={<Posts />}>
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
