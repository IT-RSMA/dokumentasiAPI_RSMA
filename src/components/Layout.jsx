import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logika logout bisa ditaruh di sini
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'grid_view' },
    { name: 'API Playground', path: '/playground', icon: 'science' },
    { name: 'Documentation', path: '/docs', icon: 'description' },
    { name: 'Analytics', path: '/analytics', icon: 'insights' },
    { name: 'Settings', path: '/settings', icon: 'settings' },
  ];

  return (
    <div className="flex h-screen bg-background text-on-surface font-body-md overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[280px] bg-surface-container-lowest border-r border-outline-variant flex flex-col z-20">
        <div className="h-16 flex items-center px-6 border-b border-outline-variant">
          <div className="flex items-center gap-3 text-medical-blue-dark">
            <span className="material-symbols-outlined text-[28px]">api</span>
            <span className="font-title-sm font-bold text-lg">SIMRS Gateway</span>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
          <div className="px-3 mb-2 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Menu</div>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-sm ${
                  isActive 
                    ? 'bg-primary-container text-on-primary-container' 
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-primary' : ''}`}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-outline-variant">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-error-red hover:bg-error-container transition-colors font-medium text-sm"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-surface-container-lowest border-b border-outline-variant flex items-center justify-between px-8 z-10">
          <div className="flex-1 flex items-center">
            <div className="relative w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-outline text-[20px]">search</span>
              <input 
                type="text" 
                placeholder="Search endpoints, logs, or docs..." 
                className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-on-surface-variant hover:text-clinical-teal hover:bg-surface-container-low rounded-full transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error-red rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-outline-variant"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right hidden md:block">
                <div className="text-sm font-semibold text-on-surface">Dr. Admin IT</div>
                <div className="text-xs text-on-surface-variant">Superuser</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                IT
              </div>
            </div>
          </div>
        </header>

        {/* Page Content Scrollable */}
        <main className="flex-1 overflow-y-auto bg-background p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}