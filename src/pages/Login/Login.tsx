

const Login = () => {
  return (
    <div className="mx-auto max-w-screen-sm my-16 flex justify-center items-center border">
    <div className="m-20 border">
        <h1>Login your account</h1>
        <div className="divider"></div>
        <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
    </div>
    </div>
  );
};

export default Login;