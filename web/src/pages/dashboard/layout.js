import SideNav from "./sidenav";


 
export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row">
     
      <div className="w-full flex-none md:w-64 sticky top-0">
        <SideNav /> 
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}
     
      </div>
    
    </div>
  );
}
