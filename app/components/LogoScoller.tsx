'use client'
import Image from "next/image";

const logos = [
  "/logos/Logo7.png",
  "/logos/Logo2.png",
  "/logos/Logo3.png",
  "/logos/Logo4.png",
  "/logos/Logo5.png",
];

export default function LogoSlider() {
  return (
    <div className="w-full bg-white py-10 overflow-hidden relative">
      <div className="flex animate-scroll whitespace-nowrap">
        {logos.concat(logos).map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center mx-10 min-w-[150px]"
          >
            <Image
              src={logo}
              alt="logo"
              width={120}
              height={60}
              className="object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
