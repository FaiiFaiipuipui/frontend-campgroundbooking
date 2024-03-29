
import Image from "next/image";

function GlobalNavBar() {
  return (
    <nav className="bg-white min-w-fit h-[55px] m-5 rounded-full sticky flex flex-row justify-start z-40 p-1 align-middle items-center gap-x-3 drop-shadow-2xl">
      <Image src="/img/logo.svg" alt="Logo" width='160' height='100' className="rounded-full inline" priority/>
      <button className="transition h-[90%] w-[170px] text-emerald-500 text-xl font-black bg-white rounded-full border-white border-4 ring-4 ring-emerald-500 hover:bg-emerald-500 hover:text-white hover:text-2xl"><p className=" ">BOOKING</p></button>
      <button className="transition h-[90%] w-[200px] text-emerald-500 text-xl font-black bg-white rounded-full border-white border-4 ring-4 ring-emerald-500 hover:bg-emerald-500 hover:text-white hover:text-2xl"><p className=" ">CAMPGROUND</p></button>
      <button className="transition h-[90%] w-[170px] text-emerald-500 text-xl font-black bg-white rounded-full border-white border-4 ring-4 ring-emerald-500 hover:bg-emerald-500 hover:text-white hover:text-2xl"><p className=" ">ABOUT ME</p></button>
    </nav>
  );
}

export default GlobalNavBar;