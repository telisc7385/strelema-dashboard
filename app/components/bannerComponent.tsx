import Image from "next/image";

export default function Banner() {
  return (
    <section className="bg-white py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6">
        {/* Left Side: Text */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <p className="text-[var(--primaryColor)] font-semibold uppercase tracking-wide mb-2">
            Best destinations around the world
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Travel, <span className="text-[var(--primaryColor)]">enjoy</span> and live a new <br /> and full life
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen in engrossed listening.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
            <button className="bg-[var(--primaryColor)] text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
              Find out more
            </button>
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="bg-[var(--primaryColor)] h-12 w-12 flex justify-center items-center rounded-full">
                ▶
              </div>
              <span className="font-semibold text-gray-700">Play Demo</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <Image
            src="/Traveller 1.png"
            alt="Traveler"
            width={500}
            height={500}
            className="relative z-10"
          />
          {/* Background shape */}
          <div className="absolute top-0 right-0 bg-orange-100 rounded-l-full h-full w-[70%] z-0"></div>
        </div>
      </div>
    </section>
  );
}
