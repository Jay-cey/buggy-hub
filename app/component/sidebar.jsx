import Link from "next/link";
import Image from "next/image";


const Sidebar = () => {
  return (
    <div className="h-full w-[20%] fixed col-span-3 flex-start top-0 left-0">
        <aside className="w-full bg-white h-full border-r border-red-500 px-10 py-6 flex flex-col space-y-8 z-30 justify-around">
            <Image src='/logoC.png' height={21} width={134} className="w-4/6"></Image>
            <div className="flex flex-col items-center h-28 space-y-2">
              <Image src='/avatar.svg' width={74} height={74} className="block"></Image>
              <p className="text-xs">Victor</p>
            </div>
            <div className="flex flex-col space-y-6">
              <Link href={'#'} className="space-x-3 text-sm text-[#796FAB] flex items-center font-bold">
                <Image src='/dashboard.svg' width={20} height={20} className="inline"></Image>
                <span>Dashboard</span>
              </Link>
              <Link href={'#'} className="space-x-3 text-xs">
                <Image src='/profile.svg' height={20} width={20} className="inline"></Image>
                <span>Edit Profile</span>
              </Link>
              <Link href={'#'} className="space-x-3 text-xs">
                <Image src='/payment.svg' height={20} width={20} className="inline" />
                <span>Payment</span>
              </Link>
              <hr className="" />
              <Link href={'#'} className="space-x-3 text-xs">
                <Image src='/gifts.svg' height={20} width={20} className="inline" />
                <span>Book For Meeting</span>
              </Link>
              <Link href={'#'} className="space-x-3 text-xs">
                <Image src='/gifts.svg' height={20} width={20} className="inline" />
                <span>Buggybillion</span>
              </Link>
              <Link href={'#'} className="space-x-3 text-xs">
                <Image src='/logout.svg' height={20} width={20} className="inline" />
                <span>Log Out</span>
              </Link>
            </div>

            <button className="bg-[#796FAB] w-full text-[#F2F2F2] text-xs rounded-md py-2">Contact Us</button>
        </aside>
    </div>
  )
}

export default Sidebar
