import SideNav from "./sidenav";


 
export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row ">
     
      <div className="w-full flex-none md:w-64 sticky top-0">
        <SideNav /> 
      </div>
      <div className="flex-grow md:overflow-y-auto px-2">{children}</div>
    
    </div>
  );
}
