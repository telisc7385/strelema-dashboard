"use client";
import { Search, Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold">All Employees</h1>
        <p className="text-sm text-gray-500">All Employee Information</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <Bell size={20} className="text-gray-600 cursor-pointer" />

        <div className="flex items-center gap-2 border rounded-lg px-3 py-1 bg-white shadow-sm">
          <User size={18} className="text-gray-600" />
          <span className="text-sm font-medium">Faisal Pathan</span>
        </div>
      </div>
    </header>
  );
}
