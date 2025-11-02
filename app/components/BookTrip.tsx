import Image from "next/image";

export default function BookTrip() {
  const steps = [
    {
      icon: "/TopDestinations1.png",
      title: "Choose Destination",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      icon: "/TopDestinations2.png",
      title: "Make Payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      icon: "/TopDestinations3.png",
      title: "Reach Airport on Selected Date",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - Steps */}
        <div>
          <p className="text-gray-500 text-sm mb-2">Easy and Fast</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#14183E] mb-8 leading-snug">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-5">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg `}
                >
                  <Image src={step.icon} alt={step.title} width={40} height={40} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Card */}
        <div className="relative flex justify-center">
          {/* Main trip card */}
            <div className="relative w-full h-[400px]">
              <Image
                src="/TripsideImage.png"
                alt="Trip to Greece"
                fill
                className="object-cover"
              />
            </div>
            
        </div>
      </div>
    </section>
  );
}
