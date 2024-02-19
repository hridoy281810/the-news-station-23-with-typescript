import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";

const Login = () => {
  const authContext = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [success, setSuccess] = useState<string>('')
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';

  const handleLogin =  (event: React.FormEvent<HTMLFormElement>):void=>{
    event.preventDefault()
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    setErrorMessage('')
    setSuccess('')
    if (password.length < 6) {
      setErrorMessage('Enter minimum six digit password')
    }
    authContext?.signIn(email, password)
      .then(result => {
        const loginUser = result
        console.log(loginUser)
        setSuccess('You have successfully login, Welcome to our website')
        navigate(from, { replace: true })
      })
      .catch(error => {
        const warning = error.message;
        setErrorMessage(warning)
      })
  }
  return (
    <div className="mx-auto max-w-screen-sm my-16 flex flex-col  justify-center  border rounded-lg">
    <div className="p-20  ">
        <div className="border p-4 rounded-lg shadow">
          <h1 className="text-center tex text-2xl font-bold">Login your account</h1>
        <div className="divider"></div>
        <form className="" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Type your password" className="input input-bordered" required />
        </div>
        <p className='text-red-700 label-text-alt mt-2'>{errorMessage}</p>
                  <p className='text-green-700 label-text-alt'>{success}</p>
                  <div className="form-control mt-4">
                    <label>
                      <p className="label-text-alt "> Dose not Have an Account?<Link to='/signup' className='text-pink-600 ms-2'>Sign up</Link> </p>
                    </label>
                  </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral text-white">Login</button>
        </div>
        </form></div>
    </div>
    </div>
  );
};

export default Login;