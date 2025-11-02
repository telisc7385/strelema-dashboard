"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm w-full">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
       <div className="relative h-[40px] w-[150px]">
        <Image
            src="/Travellogo.png"
            alt="Traveler"
            fill
            className="relative z-10"
        />
       </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#destinations" className="hover:text-orange-500">Destinations</a></li>
          <li><a href="#hotels" className="hover:text-orange-500">Hotels</a></li>
          <li><a href="#flights" className="hover:text-orange-500">Flights</a></li>
          <li><a href="#bookings" className="hover:text-orange-500">Bookings</a></li>
          <li><Link href="/login" className="hover:text-orange-500">Login</Link></li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline-block border border-orange-500 text-orange-500 px-5 py-2 rounded-md hover:bg-orange-500 hover:text-white transition">
            Sign up
          </button>
          <select className="border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-600">
            <option>EN</option>
            <option>FR</option>
          </select>
        </div>
      </nav>
    </header>
  );
}
