import Sidebar from "../component/sidebar";
import Notificationbox from "../component/notificationbox";

const layout = ({children}) => {
  return (
    <section className="bg-img bg-[#796FAB] h-screen w-screen md:grid grid-cols-12 justify-around gap-5 hidden overflow-x-hidden bg-fixed mx-auto">
      <Sidebar />
        {children}
      <Notificationbox />
    </section>
  )
}

export default layout
