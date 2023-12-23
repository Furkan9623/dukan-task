import Dashboard from "../Pages/Dashboard";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
};
export default Layout;
