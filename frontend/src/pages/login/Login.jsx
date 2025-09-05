import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(form);
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left: Form section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8 md:px-16 py-12">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-white mb-10 text-center">Login</h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label className="block text-gray-300 mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="w-full px-4 py-3 rounded-md bg-zinc-900 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-md bg-zinc-900 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-red-600 hover:bg-red-700 transition font-semibold text-white mt-4"
            >
              Login
            </button>
          </form>

          <p className="text-gray-400 text-center mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-red-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right: Background image */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/featured/spiderman-cool-pictures-8pwp7g6c6np5azum.jpg')",
        }}
      ></div>
    </div>
  );
};

export default Login;
