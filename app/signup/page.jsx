import Link from "next/link";

const page = () => {
  return (
    <>
        <section className="lg:w-full hidden lg:block bg-[#796FAB] h-screen">
            <div className="w-full h-full bg-img flex items-center">
                <div className="w-5/12 justify-center flex">
                    <img src={'logoW.png'} className="z-10 w-3/4"></img>
                </div>
                <div className="bg-[#F2F2F2] w-7/12 h-screen rounded-l-[8%] text-center flex items-center z-10">
                    <div className="w-full my-auto">
                        <h3 className="text-2xl font-semibold mb-6">SIGN UP</h3>
                        <div className="text-left w-80% flex flex-row mx-auto justify-center relative">
                            <p className="absolute right-24 text-xs">Already have an account? <Link href="/signin" className="text-[#E5AA2D]">Sign In</Link></p>
                            <form action="" method="post" className="flex flex-col w-3/4 text-left gap-y-2 mt-5">
                                <label for="firstName" className="text-xs font-semibold leading-none mt-1">First name</label>
                                <input type="text" name="" id="firstName" placeholder="Timi" className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />
                                <label for="lastName" className="text-xs font-semibold leading-none mt-1">Last name</label>
                                <input type="text" name="" id="lastName" placeholder="Victor" className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />
                                <label for="email" className="text-xs font-semibold leading-none mt-1">Email</label>
                                <input type="email" name="" id="email" placeholder="victortimi123@gmail.com" className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />
                                <label for="password" className="text-xs font-semibold leading-none mt-1">Password</label>
                                <input type="password" name="" id="password" placeholder="************" className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />
                                <label for="confirmPassword" className="text-xs font-semibold leading-none mt-1">Confirm Password</label>
                                <input type="password" name="" id="confirmPassword" placeholder="************" className="bg-[#E5E5E5] px-3 py-3 rounded-md w-full " />
                                <button className="bg-[#796FAB] w-2/3 place-self-center text-white py-2 text-xs rounded-md mt-4">SIGN UP</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
};

export default page;
