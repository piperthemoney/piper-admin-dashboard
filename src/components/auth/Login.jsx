import { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleLogin from "../../api/signIn";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const res = await handleLogin(data);
    console.log(res);
    if (res) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-secondary p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-white font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-primary text-black py-2 rounded-md hover:bg-blue-400 transition-colors"
          >
            Enter your Account
          </button>
        </form>

        {/* <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot your password?
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Login;
