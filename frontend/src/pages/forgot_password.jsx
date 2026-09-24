import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgot_password } from "../api/forgot_password";
import Loader from "./../components/loader";
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
    <div>
      <h1>Forgot Password</h1>
      <form
        onSubmit={handleSubmit}
        className="w-75 border border-border-color rounded-2xl p-8 mx-auto flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row justify-between">
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
