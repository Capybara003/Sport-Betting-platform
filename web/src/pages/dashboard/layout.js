import SideNav from './sidenav';

export default function Layout({ children }) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden bg-back'>
      <div className='w-full flex-none md:w-80'>
        <SideNav />
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </div>
  );
}
