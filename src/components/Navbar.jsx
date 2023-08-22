import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div className=" bg-white z-10 relative md:px-8 px-3 shadow-md mb-6">
      <div className="max-w-[1280px] mx-auto h-[90px]">
        <div className="flex justify-between items-center h-full">
          <div>
            <p className="text-md text-gray-500 font-semibold mt-1 hidden md:block">
              Based In
              <br /> London
            </p>
          </div>
          <div className="justify-center items-center gap-4 xl:gap-6 text-md hidden lg:flex">
          <Link to={'/'}>
              <p className=' hover:bg-slate-100 px-4 py-2 rounded-lg font-semibold transition .4s ease-in-out hover:text-primary'>Home</p>
            </Link>
            <Link to={'/products'}>
              <p className=' hover:bg-slate-100 px-4 py-2 rounded-lg font-semibold transition .4s ease-in-out hover:text-primary'>Products</p>
            </Link>
            <Link to={'/about'}>
              <p className=' hover:bg-slate-100 px-4 py-2 rounded-lg font-semibold transition .4s ease-in-out hover:text-primary'>About</p>
            </Link>
            <Link to={'/contact'}>
              <p className=' hover:bg-slate-100 px-4 py-2 rounded-lg font-semibold transition .4s ease-in-out hover:text-primary'>Contact</p>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-1"> 
            <button
              className="flex cursor-pointer justify-center items-center gap-2 md:gap-4 py-2 px-3 md:py-[13px] md:px-[21px] bg-[#243499] text-sm md:text-md lg:text-lg text-white md:rounded-xl lg:rounded-xl xl:rounded-xl rounded-lg font-bold border-[1px] border-solid border-[#243499] hover:bg-white hover:text-[#243499] ml-2 transition ease-in-out delay-450"
            >
              <p>Start Today</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
