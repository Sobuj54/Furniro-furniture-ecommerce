import { Link } from "react-router-dom";
import SocialLogin from "../../components/socialLogin/SocialLogin";

const Login = () => {
  return (
    <section
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/8357333/pexels-photo-8357333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
      className="h-screen w-full flex items-center justify-center ">
      <div className="bg-slate-950/20 border-2 border-white/30 text-white w-[40%] px-14 py-7 rounded-md shadow-md flex flex-col gap-5">
        <h3 className="text-2xl font-medium">Login</h3>
        <p>
          New to this site ?{" "}
          <Link to="/register" className="text-sky-300">
            Register
          </Link>
        </p>
        <form className="flex flex-col gap-5  ">
          <label htmlFor="email" className="flex flex-col text-white">
            Email
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter your email"
              className="border-b-2 border-white p-2 px-4 rounded-md focus:outline-none focus:border-b-sky-400 transition-all duration-150 text-black"
            />
          </label>

          <label htmlFor="password" className="flex flex-col text-white">
            Password
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter your password"
              className="border-b-2 border-white p-2 px-4 rounded-md focus:outline-none focus:border-b-sky-400 transition-all duration-150 text-black"
            />
          </label>

          <button
            type="submit"
            className="text-white bg-emerald-500 py-2 rounded-md">
            Login
          </button>
        </form>

        <div className="flex items-center gap-2">
          <div className="w-full h-[1px] bg-white " />
          <p className="w-full text-center">Or continue with</p>
          <div className="w-full h-[1px] bg-white " />
        </div>

        {/* social login */}
        <SocialLogin />
      </div>
    </section>
  );
};

export default Login;
