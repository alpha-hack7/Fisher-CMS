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
  const name = "Fisher";
  return (
    <div className="home-dashboard">
      <nav>Dashboard &gt;</nav>
      <main>
        <h2>Welcome Back, {name}</h2>
        <article className="cards">
          <Card title="Published Videos" number={12} />
          <Card title="Published Posts" number={23} />
          <Card title="Draft Videos" number={2} />
          <Card title="Draft Posts" number={15} />
        </article>
      </main>
    </div>
  );
};

export default Home_dashboard;
