
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div>
      <h2 className=' font-bold text-gray-800 uppercase mb-2 mt-4'>Find Us On</h2>
      <div className='border   py-2'>
        <h2 className='tex flex items-center gap-1 mb-2 ps-3 cursor-pointer'><span className='text-[18px]'> <FaFacebookSquare /></span>Facebook</h2>
      <hr />
        <h2 className='tex flex items-center gap-1 my-2 ps-3 cursor-pointer'><span className='text-[18px]'> <FaTwitterSquare /></span>Twitter</h2> <hr />
        <h2 className='tex flex items-center gap-1 mb-2 ps-3 cursor-pointer'><span className='text-[18px]'> <FaInstagramSquare /></span>Instagram</h2>
      </div>
    </div>
  );
};

export default FindUsOn;