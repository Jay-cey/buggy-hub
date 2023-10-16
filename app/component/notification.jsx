

const Notification = () => {
  return (
    <div className="grid grid-cols-12 gap-3 items-center hover:cursor-pointer">
        <div className="h-10 w-14 rounded-md bg-orange-400 col-span-2"></div>
        <div className="col-span-7 col-start-4">
          <p className="text-xs">Hi Victor! Welcome to bugGy hub where you feel comfort. kindly subscribe ...</p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-300 text-xs">2 hrs</p>
        </div>
    </div>
  )
}

export default Notification
