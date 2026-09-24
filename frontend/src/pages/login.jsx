import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../api/login";
import Loader from "../components/loader";

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
    <>
      <div className="login-container">
        <h1>Login Page</h1>
        <form
          onSubmit={handleSubmit}
          className="w-75 mx-auto p-12 rounded-2xl border border-[#999] flex flex-col gap-4 text-left"
        >
          <div className="flex flex-col w-full">
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
          <div className="flex flex-col w-full">
            <label htmlFor="password">Password:</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
              />
              <span className="absolute right-2.5 top-25/100">
                {showPassword ? (
                  <Eye onClick={() => setShowPassword(false)} />
                ) : (
                  <EyeOff onClick={() => setShowPassword(true)} />
                )}
              </span>
            </div>
          </div>
          <a className="text-right" href="/forgot-password">
            Forgot Password
          </a>
          <div className="flex justify-between items-center gap-4">
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
    </>
  );
};

export default Login;
