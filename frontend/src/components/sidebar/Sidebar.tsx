import docIcon from '../../assets/doc-icon.webp';

interface SidebarProps {
   isOpen: boolean;
   toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
   const sidebarStyle = {
      transitionDuration: isOpen ? '500ms' : '600ms',
      transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
      transitionDelay: isOpen ? '0' : '300ms',
   };

   const iconStyle = {
      transitionDuration: isOpen ? '1500ms' : '200ms',
      transform: isOpen ? 'rotate(360deg)' : 'rotate(90deg)',
      borderRadius: '30%',
      padding: isOpen ? '3px' : '10px',
      transitionDelay: isOpen ? '200ms' : '0',
   };

   const buttonStyle = {
      boxShadow: isOpen ? '0 0 10px rgba(255, 255, 0, 0.5)' : 'none',
      transitionDuration: isOpen ? '1000ms' : '200ms',
      transitionDelay: isOpen ? '200ms' : '0',

   };

   return (
      <div className="fixed inset-0 z-50 flex mb-[68px] md:mb-0 md:mt-[80px]" style={sidebarStyle}>
         <div className="bg-gray-700 text-white w-64 p-4 relative">
            <div className="flex justify-end">
               <button onClick={toggleSidebar} className={`absolute top-2 right-2 p-2 rounded-full ${isOpen ? 'border-2 border-orange-200  bg-white/30' : ''}`} style={buttonStyle}>
                  <img src={docIcon} alt="Doc Icon" className="w-10 h-10" style={iconStyle} />
               </button>

            </div>
            <nav className="mt-12">
               <ul>
                  <li className="py-2"><a href="#">About</a></li>
                  <li className="py-2"><a href="#">Game Rules</a></li>
                  <li className="py-2"><a href="#">Card Rules</a></li>
               </ul>
            </nav>
         </div>
         <div className="flex-1 p-4" onClick={toggleSidebar}>
            <h1 className="text-2xl">Main Content</h1>
            <p>This is the main content area.</p>
         </div>
      </div>
   );
};

export default Sidebar;
