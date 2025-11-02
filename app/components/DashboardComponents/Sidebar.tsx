"use client";

import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Settings,
  Building2,
  Plane,
  GraduationCap
} from "lucide-react";

const Sidebar = () => {

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "All Employees", icon: Users },
    { name: "All Departments", icon: Building2 },
    { name: "Attendance", icon: CalendarDays },
    { name: "Leaves", icon: Plane },
    { name: "Training", icon: GraduationCap },
    { name: "Setting", icon: Settings },
  ];

  return (
    <aside
      className={`w-64 bg-white shadow-lg flex flex-col justify-between border-r `}
    >
      <div>
        <div className="flex items-center justify-center gap-3 p-4 border-b">
          <img src="/Strelema.png" alt="Logo" className="h-20 w-40 rounded-lg" />
        </div>

        <nav className="mt-4 space-y-2">
          {menuItems.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className={`flex items-center gap-3 px-5 py-2 w-full text-left rounded-md hover:bg-blue-100 hover:text-blue-600 transition`}
            >
              <Icon size={18} />
              <span>{name}</span>
            </button>
          ))}
        </nav>
      </div>

      
    </aside>
  );
};

export default Sidebar;
