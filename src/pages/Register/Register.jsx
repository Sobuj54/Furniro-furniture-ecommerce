import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthProvider } from "../../context/Context";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { createUserWithEmail, updateUser } = useContext(AuthProvider);

  const onSubmit = (data) => {
    const { name, email, password } = data;

    createUserWithEmail(email, password)
      .then((loggedUser) => {
        // console.log(loggedUser.user);
        // update user name
        updateUser(name)
          .then(() => {
            // console.log("name updated");
            reset();
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/2728186/pexels-photo-2728186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
      className="h-screen w-full flex items-center justify-center ">
      <div className="bg-gray-900/50 border-2 border-white/30 text-white w-[40%] px-14 py-7 rounded-md shadow-md flex flex-col gap-5">
        <h3 className="text-2xl font-medium">Register</h3>
        <p>
          Already have an account ?{" "}
          <Link to="/login" className="text-sky-300">
            Login
          </Link>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5  ">
          <label htmlFor="name" className="flex flex-col text-white">
            Name
            <input
              type="text"
              name=""
              id="name"
              {...register("name")}
              required
              placeholder="Enter your name"
              className="border-b-2 border-white p-2 px-4 rounded-md focus:outline-none focus:border-b-sky-400 transition-all duration-150 text-black"
            />
          </label>

          <label htmlFor="email" className="flex flex-col text-white">
            Email
            <input
              type="email"
              name=""
              id="email"
              {...register("email")}
              required
              placeholder="Enter your email"
              className="border-b-2 border-white p-2 px-4 rounded-md focus:outline-none focus:border-b-sky-400 transition-all duration-150 text-black"
            />
          </label>

          <label
            htmlFor="password"
            className="flex flex-col text-white relative">
            Password
            <input
              type={showPassword ? "text" : "password"}
              name=""
              id="password"
              {...register("password")}
              required
              placeholder="Enter your password"
              className="border-b-2 border-white p-2 px-4 rounded-md focus:outline-none focus:border-b-sky-400 transition-all duration-150 text-black "
            />
            <div
              className="absolute top-[55%] text-black right-2  cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaRegEye /> : <FaEyeSlash />}
            </div>
          </label>

          <button
            type="submit"
            className="text-white bg-emerald-500 py-2 rounded-md">
            Register
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

export default Register;
