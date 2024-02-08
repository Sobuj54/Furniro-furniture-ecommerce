import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import { useContext } from "react";
import { AuthProvider } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthProvider);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((loggedUser) => {
        // console.log(loggedUser.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center gap-5">
      <button
        onClick={handleGoogleLogin}
        className="px-10 py-2 bg-white rounded-md text-xl">
        <FcGoogle />
      </button>
      <button className="px-10 py-2 bg-white rounded-md text-xl text-blue-500">
        <FaMeta />
      </button>
    </div>
  );
};

export default SocialLogin;
