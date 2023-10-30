import Link from "next/link"

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
                        <h3 className="text-2xl font-semibold mb-6">SIGN IN</h3>
                        <div className="text-left w-80% flex flex-row mx-auto justify-center relative">
                            <form action="" method="post" className="flex flex-col w-3/4 text-left gap-y-2 mt-5">
                                <label for="email" className="text-xs font-semibold leading-none mt-1">Email</label>
                                <input type="email" name="" id="email" placeholder="victortimi123@gmail.com" className="bg-[#DCE0E1] px-3 py-3 rounded-md w-full " />
                                <label for="password" className="text-xs font-semibold leading-none mt-1">Password</label>
                                <input type="password" name="" id="password" placeholder="************" className="bg-[#DCE0E1] px-3 py-3 rounded-md w-full " />

                                {/* Link is for demo purposes */}
                                <Link href="/invoice">
                                    <button className="bg-[#796FAB] w-3/4 place-self-center text-white py-2 text-xs rounded-md mt-5">SIGN IN</button>
                                </Link>
                            </form>
                        </div>
                        <p className="text-xs font-bold mt-3">Don't have an account? <Link href="/signup" className="text-[#E5AA2D]">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default page
