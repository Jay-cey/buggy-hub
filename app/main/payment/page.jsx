import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <div className="w-full bg-[#F2F2F2] rounded-3xl my-10 col-span-6 col-start-3 ml-20 z-20">
        <div className="flex mt-5 w-4/5 mx-auto items-center ">
            <div className="w-2/5">
                <Link href={"/main"}><Image src='/arrow.svg' width={12} height={12} className="float-left"></Image></Link>
            </div>
            <h2 className="font-medium text-2xl justify-self-center">Payment</h2>
        </div>
        <form className="text-left flex flex-col justify-center mb-7 w-4/5 mx-auto gap-y-2">
            <div className="flex items-center space-x-5">
                <div className="flex items-center space-x-2">
                    <input type="radio" id="visa" />
                    <label for='visa'>
                        <Image src='/visa.svg' width={90} height={27.6} />
                    </label>
                </div>

                <div className="flex items-center space-x-4">
                    <input type="radio" id="mastercard" />
                    <label>
                        <Image src='/mastercard.svg' width={60} height={60} />
                    </label>
                </div>
            </div>

            <label for="email" className="text-xs font-semibold leading-none mt-1">Card Holder</label>
            <input type="email" name="" id="email" placeholder="Victor Timi" className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />

            <label for="cNumber" className="text-xs font-semibold leading-none mt-1">Card Number</label>
            <input type="" name="" id="cNumber" placeholder="5454343454545" className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />

            <div className="flex w-full space-x-6">
            <div className="w-3/5">
                <label for="date" className="text-xs font-semibold leading-none mt-1">Date</label>
                <input type="date" name="" id="date" placeholder="MM/DD" className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />
            </div>

            <div className="w-2/5">
                <label for="cvv" className="text-xs font-semibold leading-none mt-1">CVV</label>
                <input type="" name="" id="cvv" placeholder="112" className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />
            </div>
            </div>

            <div className="border border-[#796FAB] flex flex-col rounded-md p-4 mt-3">
                <div className="flex justify-between">
                    <p>Amount to be deducted</p>
                    <p className="font-semibold">15,000</p>
                </div>
                <div className="flex justify-between">
                    <p>Duration of subscription</p>
                    <p><span>30</span> days</p>
                </div>
                <button className="bg-[#796FAB] w-4/5 place-self-center text-white py-2 text-xs rounded-md mt-4">Proceed</button>
            </div>
        </form>
    </div>
  )
}

export default page
