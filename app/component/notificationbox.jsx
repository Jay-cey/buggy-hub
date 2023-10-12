import Notification from "./notification";

const Notificationbox = () => {
  return (
    <>
      <aside className="w-[23%] h-screen col-span-3 fixed top-0 right-10">
        <div className="h-[100%] flex flex-col justify-center">
          <p className="text-[#F2F2F2]">Notification</p>
          <div className="bg-white h-[90%] rounded-xl px-2 py-5 overflow-y-auto notificationBox">
            <div className="max-h-full space-y-3">
              <Notification />
              <Notification />
              <Notification />
              <Notification />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Notificationbox;
