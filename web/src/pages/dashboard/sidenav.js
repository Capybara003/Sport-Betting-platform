import Link from 'next/link';
import NavLinks from './navlinks';
import Image from 'next/image';




const SideNav = () =>{
  return (
    <div className="flex h-full md:h-screen bg-[#330034] flex-col px-3 py-4 md:px-2 md:sticky md:top-0">
      <Link
        className="mb-2 flex h-20 items-end justify-start  rounded-md p-4 md:h-20"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          {/* <Image src="/logo.png" alt='logo' width={100} height={100} /> */}
          LOGO
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        {/* <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form> */}
      </div>
    </div>
  );
}
export default SideNav;