import Link from "next/link";
import Image from "next/image";

const Receipt = () => {
    return (
        <div className="w-full bg-[#EFF6F8] rounded-3xl my-10 col-span-6 col-start-3 ml-20 z-20 flex justify-center pt-8">
            <div className="w-4/5">
                <div>
                    <Link href={"/main"}><Image src='/arrow.svg' width={12} height={12} ></Image></Link>
                </div>

                <div className="mt-7">
                    <div className="flex gap-4">
                        <div className="h-14 w-14 bg-[#EA3C3626] rounded-md flex justify-center items-center"><span className="text-2xl font-bold text-purple-900">C</span></div>
                        <div className="">
                            <p>bugGY hub</p>
                            <p className="text-[#28282899]">2 hours ago</p>
                        </div>
                    </div>
                    <div className="leading-5 mt-5">
                        Hello Victor,
                        <br /><br />
                        Hi Victor! Your Monthly Subscription has been completed , You can book now for the hub. Kindly download your payment receipt
                    </div>
                    <div className="mt-10 flex justify-center items-center rounded-md w-full py-3 px-5 border border-[#28282899] bg-white gap-8">
                        <div className="w-1/12">
                            <div className="w-full rounded-md bg-[#EA3C3626] px-1 py-1">
                                <Image src='/pdf.svg' width={32} height={32}></Image>
                            </div>
                        </div>
                        <div className="text-sm w-8/12">
                            <p>Monthly Subscription Receipt</p>
                            <p className="text-[#28282899]">1.25mb</p>
                        </div>
                        <div className="w-1/12">
                            <Link href='/do'><Image src='/download.svg' width={52} height={52}></Image></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Receipt;
