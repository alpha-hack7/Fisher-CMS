import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../api/login";
import "../css/login.css";
import Loader from "../sections/components/loader";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginUser(user);
      toast.success("Logged In Successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error || "Something wrong happened");
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <Loader />;
  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
            <span className="show-password">
              {showPassword ? (
                <FiEye onClick={() => setShowPassword(false)} />
              ) : (
                <FiEyeOff onClick={() => setShowPassword(true)} />
              )}
            </span>
          </div>
        </div>
        <a className="forgot-password" href="/forgot-password">
          Forgot Password
        </a>
        <div className="login-buttons">
          <button
            type="button"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
