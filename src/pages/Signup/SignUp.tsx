
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const SignUp:React.FC= () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [success, setSuccess] = useState<string>('')

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>):void=>{
    event.preventDefault()
     const form = event.target as HTMLFormElement
     const displayName = form.displayName.value
     const email = form.email.value
     const password = form.password.value
     setErrorMessage('')
         setSuccess('')
         if (password.length < 8) {
          setErrorMessage('Enter minimum six digit password')
         }
         authContext?.crateUser(email,password)
         .then(result => {
          const createdUser = result
          console.log(createdUser)
          setSuccess('You have successfully created the account, Welcome to our website')
          navigate('/')
        })
        .catch((error:string) => {
          const warning = error;
          setErrorMessage(warning)
        })
    }
  return (
    <div className="mx-auto max-w-screen-sm my-16 flex flex-col  justify-center  border rounded-lg">
    <div className="p-20  ">
        <div className="border p-4 rounded-lg shadow">
          <h1 className="text-center tex text-2xl font-bold">Create your account</h1>
        <div className="divider"></div>
        <form className="" onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">UserName</span>
          </label>
          <input type="text" name="displayName" placeholder="user name" className="input input-bordered" required />
        </div>
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
                      <p className="label-text-alt ">  Already Have an Account?  <Link to='/login' className='text-pink-600 ms-2'>Login</Link> </p>
                    </label>
                  </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral text-white">Sign Up</button>
        </div>
        </form></div>
    </div>
    </div>
  );
};

export default SignUp;