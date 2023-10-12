

const Invoice = () =>{
    let status = 'Pending'
    return (
        <>
            <div className="rounded-xl w-[85%] flex flex-col items-center py-4 px-3 h-32 bg-[#F2F2F2]">
                <div className="w-full grid grid-cols-12 items-center">
                    <div className="w-14 h-14 rounded-md bg-yellow-200 col-span-2">
                    </div>
                    <div className="col-span-7 text-black">
                        <h6 className="font-semibold text-2xl">One-month Subscription</h6>
                        <p className="text-slate-500 text-lg">12-08-23</p>
                    </div>
                    <div className="col-span-3 text-black">
                        <h6 className="font-semibold text-2xl">15,000</h6>
                        <p className="text-orange-200 text-lg">{status}</p>
                    </div>
                    <></>

                </div>
                <hr className="text-black" />
                <div className="w-full text-center">
                    <p className="text-slate-500 text-lg">Attendance V</p>
                </div>

            </div>
        </>
    )
}

export default Invoice