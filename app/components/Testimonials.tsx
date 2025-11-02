"use client";
import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      image: "/user.png",
      text: "“On the Windows talking painted posture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    },
    {
      name: "Chris Thomas",
      location: "CEO of Red Button",
      image: "/user.png",
      text: "“Friendly team, great communication, and overall amazing experience. I would highly recommend them to anyone!”",
    },
    {
      name: "Sarah Jones",
      location: "New York, USA",
      image: "/user.png",
      text: "“The process was super smooth and the customer support was fantastic. I’ll definitely use them again!”",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center overflow-hidden">
        {/* LEFT SIDE — Title and Dots */}
        <div>
          <p className="uppercase text-gray-500 tracking-wider text-sm mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#14183E] mb-10 leading-snug">
            What People Say <br /> About Us.
          </h2>

          {/* Dots Indicator */}
          <div className="flex gap-3 mt-6 justify-start">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#39425D] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — Slider */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center md:justify-end px-4"
              >
                <div className="bg-white  relative w-[450px]">
                  {/* User Image */}
                  <div className="absolute top-8 left-8 z-10">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={60}
                      height={60}
                      className="rounded-full border-4 border-white shadow-md"
                    />
                  </div>

                  {/* Testimonial Content */}
                  <div className="shadow-xl rounded-3xl p-8 mt-14 mb-3">
                    <p className="text-gray-600 text-sm leading-relaxed mt-6 mb-4">
                        {t.text}
                    </p>
                    <h3 className="font-semibold text-gray-900">{t.name}</h3>
                    <p className="text-gray-500 text-sm">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
