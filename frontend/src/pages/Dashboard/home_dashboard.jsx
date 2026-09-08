import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDashboardCards } from "../../api/dashboard_cards";
import Loader from "../../sections/components/loader";
import "./css/home_dashboard.css";

const Card = ({ title, number }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

const Home_dashboard = () => {
  const username = localStorage.getItem("username");
  const { data: cards, isLoading, error } = useDashboardCards();
  useEffect(() => {
    if (error) {
      toast.error(error || "Something wrong happened");
    }
  }, [error]);
  if (isLoading) return <Loader />;
  return (
    <div className="home-dashboard">
      <nav>Dashboard &gt;</nav>
      <main>
        <h2>Welcome Back, {username}</h2>
        <article className="cards">
          <Card title="Published Videos" number={cards?.videos_count} />
          <Card title="Published Posts" number={cards?.posts_count} />
          <Card title="Draft Videos" number={cards?.draft_videos_count} />
          <Card title="Draft Posts" number={cards?.draft_posts_count} />
        </article>
      </main>
    </div>
  );
};

export default Home_dashboard;
