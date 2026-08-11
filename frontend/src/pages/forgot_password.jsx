import { useState } from "react";
import { useNavigate } from "react-router-dom";
import forgot_password from "../api/forgot_password";
import Loader from "../sections/components/loader";
import "./../css/forgot-password.css";
const Forgot_password = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await forgot_password(email);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <Loader />;
  return (
    <div className="forgot-password-page">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="buttons">
          <button type="button" onClick={() => navigate("/login")}>
            Go Back
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Forgot_password;
