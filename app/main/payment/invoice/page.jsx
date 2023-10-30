import Image from "next/image";
import Link from "next/link";

const Invoice = () => {
    return (
        <div className="w-full bg-white rounded-3xl my-10 col-span-6 col-start-3 ml-20 z-20 flex justify-center py-8">
        <div className="w-4/5">
            <div className="float-left">
                <Link href={"/payment"} className="flex gap-4 "><Image src='/arrow.svg' width={12} height={12} ></Image>Back</Link>
            </div>
            <div className="mt-10 mb-5 px-8 py-7 bg-[#F2F2F2] rounded-lg">
                <div className="flex justify-between">
                    <div>
                        <Image src="/logo-c.svg" width={120} height={68}></Image>
                    </div>
                    <div className="">
                        <p className="text-zinc-500">Payment details</p>
                    </div>
                </div>
                <div className="text-center my-5">
                    <h6>Transaction Amount</h6>
                    <p className="font-bold">$1500</p>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5">
                    <div className="flex relative w-full">
                        <p className="text-zinc-500">Name</p>
                        <p className="absolute right-0">Tijesuni Victor</p>
                    </div>
                    <hr />
                    </div>
                    <div className="flex flex-col gap-5">
                    <div className="flex relative w-full">
                        <p className="text-zinc-500">Paid on</p>
                        <p className="absolute right-0">10 August, 2022</p>
                    </div>
                    <hr />
                    </div>
                    <div className="flex flex-col gap-5">
                    <div className="flex relative w-full">
                        <p className="text-zinc-500">Subscription</p>
                        <p className="absolute right-0">Monthly</p>
                    </div>
                    <hr />
                    </div>
                    

                    <div className="my-5">
                        <button className="rounded-md w-full h-14 bg-[#796FAB] text-white">
                            Download Receipt as PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Invoice;
