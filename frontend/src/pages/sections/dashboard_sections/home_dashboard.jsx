import { useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "../../../components/loader";
import { useDashboardCards } from "../../../hooks/useDashboardCards";
import {} from "react-feather";
import { useNavigate } from "react-router-dom";

const Card = ({ title, number }) => {
  return (
    <div className="w-fit flex flex-col items-center p-4 rounded-2xl bg-primary border-border-color ">
      <span>{title}</span>
      <span className="font-bold text-2xl">{number}</span>
    </div>
  );
};
const Section = ({ content, destination_link, destination_name }) => {
  const navigate = useNavigate();
  console.log(content);
  return (
    <section className="w-full h-20 p-4 flex flex-col">
      <div className="w-full h-full"></div>
      <button className="w-fit" onClick={() => navigate(destination_link)}>
        {destination_name}
      </button>
    </section>
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
    <div>
      <nav id="dash-nav">Dashboard &gt;</nav>
      <main className="mt-8 bg-secondary p-8">
        <h2 className="mb-4 text-left font-bold text-2xl">
          Welcome Back, {username}
        </h2>
        <article className="flex flex-wrap gap-4">
          <Card title="Published Videos" number={cards?.videos_count} />
          <Card title="Published Posts" number={cards?.posts_count} />
          <Card title="Draft Videos" number={cards?.draft_videos_count} />
          <Card title="Draft Posts" number={cards?.draft_posts_count} />
        </article>
        <div className="flex gap-4 mt-4">
          <Section
            destination_link="posts/make-post/"
            destination_name="Make Post"
            content="Empty"
          />
          <Section
            destination_link="videos/upload-video/"
            destination_name="Upload Video"
            content="Empty"
          />
        </div>
      </main>
    </div>
  );
};

export default Home_dashboard;
