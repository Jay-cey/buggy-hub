import Invoice from "../component/invoice";
import Image from "next/image";
import react from "react";


const main = () => {
    const user = "Victor";
  return (
        <>
        <div className="my-10 col-span-6 col-start-3 ml-20 w-full text-white z-10">
            <p>Welcome {user}</p>
            <div className="w-full grid grid-cols-3 gap-3">
                <div className="col-span-2 h-56 w-full bg-amber-400 rounded-2xl p-5">
                    <p className="font">Expires in</p>
                    <div className="justify-center flex flex-col w-3/5">
                        <p className="text-4xl font-bold">00 : 00 : 00</p>
                        <p className="text-xs w-full flex space-x-12">
                            <span>Days</span>
                            <span>Hours</span>
                            <span>Minutes</span>
                        </p>
                    </div>
                    <div className="w-1/2 bg-white bg-opacity-25 rounded-md backdrop-blur-[26px] h-fit px-4 py-2 mt-5 space-y-2">
                        <h6 className="text-[.6rem]">Free &nbsp; Days &nbsp; Bonus</h6>
                        <div className="flex space-x-2">
                            <p className="text-xl font-bold text-center">00<span className="block text-[.7rem] font-normal leading-none">Days</span></p>
                            <span className="text-xl font-bold">:</span>
                            <p className="text-xl font-bold text-center">00<span className="block text-[.7rem] font-normal leading-none">Hours</span></p>
                            <span className="text-xl font-bold">:</span>
                            <p className="text-xl font-bold text-center">00<span className="block text-[.7rem] font-normal leading-none">Minutes</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 w- w-full h-inherit grid grid-rows-3 gap-3">
                    <div className="row-span-2 bg-[#8E86B8] h-36 w-full rounded-2xl flex flex-col justify-center items-center gap-2">
                        <Image src="/wifi.svg" width={64} height={64} />
                        <p>QWER1234Y <span><Image src="/copy.svg" width={20} height={20} className="inline" /></span></p>
                    </div>
                    <div className="row-span-1 h-16 w-full subscribe rounded-2xl items-center flex justify-center">
                    <p>Subscribe Now +</p>
                    </div>
                </div>

            </div>


            <div className="w-full bg-white rounded-2xl mt-6 pb-12 flex flex-col items-center overflow-y-auto space-y-6">
                <div className="bg-[#E3E3E3] w-[85%] py-1 rounded-xl flex justify-center px-2 mt-12 h-12">
                    <button className="w-1/2 py-3 bg-white rounded-md text-[#535353] leading-none">Sit Available</button>
                    <button className="w-1/2 py-3 bg-inherit rounded-md text-[#796FAB] leading-none">invoice</button>
                </div>

                <div className="w-full flex flex-col items-center overflow-y-auto space-y-6">
                    <Invoice status={"Pending"} />
                    <Invoice status={"Ongoing"} />
                    <Invoice status={"Completed"} />
                </div>
            </div>
        </div>  
        {/* <div className="w-full bg-[#F2F2F2] rounded-3xl my-10 col-span-6 col-start-3 ml-20 z-20"> */}
        {/* </div> */}
        </>
  )
}

export default main
