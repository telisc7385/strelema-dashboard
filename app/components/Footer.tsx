import { Facebook, Twitter, Instagram, AppWindow, Smartphone } from "lucide-react"; // ✅ Lucide icons

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-6 md:px-16 border-t">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 text-gray-700 container mx-auto">
        {/* Brand */}
        <div className="col-span-2">
          <h1 className="text-2xl font-bold text-black mb-2">Travello</h1>
          <p className="text-sm text-gray-500">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h4 className="font-semibold mb-3">More</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t pt-6">
        {/* Social icons */}
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 cursor-pointer transition">
            <Facebook className="w-5 h-5 text-gray-700" />
          </div>
          <div className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 cursor-pointer transition">
            <Instagram className="w-5 h-5 text-gray-700" />
          </div>
          <div className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 cursor-pointer transition">
            <Twitter className="w-5 h-5 text-gray-700" />
          </div>
        </div>

        {/* App store */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg cursor-pointer">
            <Smartphone className="w-4 h-4" />
            <span className="text-sm">Google Play</span>
          </div>
          <div className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg cursor-pointer">
            <AppWindow className="w-4 h-4" />
            <span className="text-sm">App Store</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
