'use client';   
import React, { useState } from 'react';
import Image from "next/image";
import Attendance from './attendance';

const Invoice = ({status}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="rounded-xl w-[85%] flex flex-col items-center py-4 px-4 h-fit bg-[#F2F2F2] border-2 border-solid border-[#28282840]">
                <div className="w-full grid grid-cols-12 items-center">
                    <div className="w-14 h-14 rounded-m col-span-2">
                        <Image src={`/${status}.svg`} height={64} width={64}></Image>
                    </div>
                    <div className="col-span-8 text-black">
                        <h6 className="font-semibold text-2xl">One-month Subscription</h6>
                        <p className="text-slate-500 text-lg">12-08-23</p>
                    </div>
                    <div className="col-span-2 text-black text-right">
                        <h6 className="font-semibold text-2xl">15,000</h6>
                        <p className={`text-sm ${status === 'Completed' ? 'text-completed' : status === 'Pending' ? 'text-pending' : 'text-ongoing'}`}>{status}</p>
                    </div>
                </div>
                <div className="w-full text-center">
                    <hr className="text-black w-full h-[1.5px] border-none bg-[#28282840] mt-2" />
                    <button className="text-slate-500 text-lg mt-1 cursor-pointer" onClick={handleClick}>
                        Attendance &nbsp; 

                        {isOpen ? <svg className='inline' xmlns="http://www.w3.org/2000/svg" width="23" height="12" viewBox="0 0 15 8" fill="none">
                        <path d="M15.0026 6.46806C15.003 6.55031 14.9873 6.63185 14.9562 6.708C14.9251 6.78415 14.8792 6.85341 14.8213 6.91181C14.7632 6.97039 14.6941 7.01688 14.6179 7.04861C14.5418 7.08034 14.4601 7.09668 14.3776 7.09668C14.295 7.09668 14.2134 7.08034 14.1372 7.04861C14.061 7.01688 13.9919 6.97039 13.9338 6.91181L8.82756 1.80556C8.47599 1.45443 7.99943 1.25721 7.50256 1.25721C7.00568 1.25721 6.52912 1.45443 6.17756 1.80556L1.07131 6.91181C0.953617 7.0295 0.793996 7.09561 0.627557 7.09561C0.461119 7.09561 0.301497 7.0295 0.183807 6.91181C0.0661174 6.79412 0 6.63449 0 6.46806C0 6.30162 0.0661174 6.142 0.183807 6.02431L5.29006 0.918056C5.58034 0.627035 5.92519 0.396143 6.30485 0.238603C6.6845 0.0810623 7.09151 -3.05176e-05 7.50256 -3.05176e-05C7.9136 -3.05176e-05 8.32061 0.0810623 8.70027 0.238603C9.07992 0.396143 9.42477 0.627035 9.71506 0.918056L14.8213 6.02431C14.8792 6.08271 14.9251 6.15197 14.9562 6.22811C14.9873 6.30426 15.003 6.3858 15.0026 6.46806Z" fill="#282828" fillOpacity="0.6"/>
                        </svg> : 
                        <svg className="inline" xmlns="http://www.w3.org/2000/svg" width="23" height="12" viewBox="0 0 23 12" fill="none">
                        <path d="M0.140038 1.54816C0.13934 1.4275 0.162468 1.30788 0.208095 1.19617C0.253723 1.08446 0.320954 0.982858 0.405931 0.897185C0.491166 0.811248 0.592572 0.743039 0.704301 0.69649C0.81603 0.649942 0.93587 0.625977 1.05691 0.625977C1.17795 0.625977 1.29779 0.649942 1.40952 0.69649C1.52124 0.743039 1.62265 0.811248 1.70789 0.897185L9.19872 8.38802C9.71446 8.90312 10.4136 9.19244 11.1425 9.19244C11.8714 9.19244 12.5705 8.90312 13.0862 8.38802L20.5771 0.897185C20.7497 0.724535 20.9839 0.627541 21.2281 0.627541C21.4722 0.627541 21.7064 0.724535 21.879 0.897185C22.0517 1.06984 22.1487 1.304 22.1487 1.54816C22.1487 1.79233 22.0517 2.02649 21.879 2.19914L14.3882 9.68997C13.9624 10.1169 13.4565 10.4556 12.8995 10.6867C12.3426 10.9178 11.7455 11.0368 11.1425 11.0368C10.5395 11.0368 9.94241 10.9178 9.38545 10.6867C8.8285 10.4556 8.32261 10.1169 7.89676 9.68997L0.405931 2.19914C0.320954 2.11347 0.253723 2.01186 0.208095 1.90016C0.162468 1.78845 0.13934 1.66883 0.140038 1.54816Z" fill="#282828" fillOpacity="0.6"/>
                        </svg>
                        }
                    </button>
                </div>

                {isOpen && (
                    <div className='w-full'>
                        {/* accordion content here */}
                        <table className='w-full table-auto text-left'>
                            <thead className='text-slate-500 border-collapse border-y-[1.5px] border-[#28282840]'>
                                <tr>
                                    <th>Date</th>
                                    <th>Arrival Time</th>
                                    <th>Departure Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Attendance date={"2 December, 2023"} arrival={"09:00am"} departure={"08:32pm"} />
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </>
    )
}

export default Invoice;
