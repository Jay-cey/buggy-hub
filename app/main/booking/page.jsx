import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <div className="w-full bg-[#F2F2F2] rounded-3xl my-10 col-span-6 col-start-3 ml-20 z-20">
      <div className="flex mt-5 w-4/5 justify-center items-center">
        <div className="w-3/12">
          <Link href={"/main"}><Image src='/arrow.svg' width={12} height={12}></Image></Link>
        </div>
        <h2 className="font-medium text-2xl justify-self-start">Book For Meeting</h2>
      </div>
      <div className="text-left flex flex-row mx-auto justify-center mb-7">
      <form action="" method="post" className="flex flex-col w-3/4 text-left gap-y-2 mt-5">

        <label for="name" className="text-xs font-semibold leading-none mt-1">Name</label>
        <input type="text" name="" id="name" placeholder="Timi" className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />

        <label for="email" className="text-xs font-semibold leading-none mt-1">Email</label>
        <input type="email" name="" id="email" placeholder="victortimi123@gmail.com" className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />

        <label for="phone" className="text-xs font-semibold leading-none mt-1">Phone Number</label>
        <input type="phone" name="" id="phone" placeholder="xxx - xxx-xxx " className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />

        <div className="flex w-full space-x-6">
          <div className="w-3/5">
            <label for="date" className="text-xs font-semibold leading-none mt-1">Date</label>
            <input type="date" name="" id="date" placeholder="MM/DD" className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />
          </div>

          <div className="w-2/5">
            <label for="time" className="text-xs font-semibold leading-none mt-1">Time</label>
            <input type="time" name="" id="Time" placeholder="" className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />
          </div>
        </div>

        <label for="request">Make Request</label>
        <textarea className="bg-[#E5E5E5] rounded-md h-36 resize-none"></textarea>

        <button className="bg-[#796FAB] w-2/3 place-self-center text-white py-2 text-xs rounded-md mt-4">BOOK</button>
      </form>
      </div>
    </div>
  )
}

export default page
