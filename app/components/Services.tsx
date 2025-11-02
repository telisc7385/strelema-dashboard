import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      icon: "/weather.png",
    },
    {
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      icon: "/flight.png",
      highlight: true,
    },
    {
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferred to men it engrossed listening.",
      icon: "/microphone.png",
    },
    {
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers.",
      icon: "/setting.png",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="uppercase text-gray-500 tracking-wider text-sm mb-2">
          Category
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
          We Offer <span className="text-gray-900">Best Services</span>
        </h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-300 `}
            >
              {/* Background rectangle image */}
              <div className={`${service.highlight ? "flex": "hidden" } absolute bottom-7 left-3 w-full h-full z-0 flex justify-start items-end pointer-events-none`}>
                <Image
                  src="/Rectangle 157.png"
                  alt="background accent"
                  width={200}
                  height={200}
                  className="translate-x-[-20%] translate-y-[20%] "
                />
              </div>

              {/* Foreground card */}
              <div className="relative bg-white rounded-lg p-8 z-10 ">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={70}
                    height={70}
                  />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
