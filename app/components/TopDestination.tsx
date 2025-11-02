import Image from "next/image";

export default function TopDestinations() {
  const destinations = [
    {
      image: "/Italty.png",
      title: "Rome, Italy",
      price: "$5.42k",
      trip: "10 Days Trip",
    },
    {
      image: "/London.png",
      title: "London, UK",
      price: "$4.2k",
      trip: "12 Days Trip",
    },
    {
      image: "/Europe.png",
      title: "Full Europe",
      price: "$15k",
      trip: "28 Days Trip",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="uppercase text-gray-500 tracking-wider text-sm mb-2">
          Top Selling
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
          Top <span className="text-[#14183E]">Destinations</span>
        </h2>

        {/* Destination Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white transition-all duration-300 hover:-translate-y-2 w-[450px]"
            >
              {/* Image */}
              <div className="relative w-full h-[400px]">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Details */}
              {/* <div className="flex justify-between items-center px-6 py-4">
                <h3 className="text-gray-900 font-semibold text-lg">
                  {dest.title}
                </h3>
                <p className="text-gray-600 font-medium">{dest.price}</p>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm px-6 pb-6">
                <Image
                  src="/send-icon.png"
                  alt="trip"
                  width={16}
                  height={16}
                  className="opacity-70"
                />
                <span>{dest.trip}</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
