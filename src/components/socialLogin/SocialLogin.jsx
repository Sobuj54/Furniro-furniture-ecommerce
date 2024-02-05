import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      <button className="px-10 py-2 bg-white rounded-md text-xl">
        <FcGoogle />
      </button>
      <button className="px-10 py-2 bg-white rounded-md text-xl text-blue-500">
        <FaMeta />
      </button>
    </div>
  );
};

export default SocialLogin;
