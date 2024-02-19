import { FaGithub, FaGoogle } from "react-icons/fa";

const LogingWith = () => {
  return (
    <div className="mt-4 border border-gray-400 rounded-lg flex flex-col justify-center p-2">
   <button className="btn btn-outline mb-2"> <FaGoogle /> Google Login</button>
   <button className="btn btn-outline"> <FaGithub /> Github Login</button>
    </div>
  );
};

export default LogingWith;