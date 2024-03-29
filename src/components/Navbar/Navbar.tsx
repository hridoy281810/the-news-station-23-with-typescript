
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
const Navbar = () => {
  const authContext = useContext(AuthContext)
  const handleLogOut : () => void = ()=> {
    authContext?.logout()
      .then(()=>toast.success("logout successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <div >
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
      
        <li><a>Item 3</a></li>
      </ul>
    </div>
  </div> 
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  ">
   
      <li className='tsx font-semibold mr-2'>
        <Link to='/'>
          Home
         
        </Link>
      </li>
      <li className='tsx font-semibold mr-2'><Link to='/'>About</Link></li>
      <li className='tsx font-semibold mr-2'><Link to='/'>Carear</Link></li>
    
    </ul>
  </div>
  <div className="navbar-end">
  <div title={`${authContext?.user? authContext?.user?.email : 'no title'}`}  className="avatar ">
  <div className="w-10 rounded-full ring ring-gray-700 ring-offset-base-100 ring-offset-2">
    <img src={`${authContext?.user && authContext?.user?.photoULR=== null? authContext?.user?.photoULR: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" }`  } />
  </div>
</div>
{authContext?.user ? (
<Link onClick={handleLogOut} to='/' className="py-2 px-10 btn-active text-white btn-neutral font-bold ms-4">Logout</Link>
) : (
  <Link  to='/login' className="py-2 px-10 btn-active text-white btn-neutral font-bold ms-4">Login</Link>
)}
  </div>
</div>
    </div>
  );
};

export default Navbar;

