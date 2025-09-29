import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function MassagePromo() {
  return (
    <div className="relative flex flex-col md:flex-row h-screen">
      {/* Left text section */}
      <div className="bg-[#000000] text-white flex flex-col justify-center p-10 md:w-1/2">
        <h1 className="text-5xl leading-tight font-serif mb-6">
          We Bring<br/>Sophisticated Fun<br/>To Your Event
        </h1>

        <div className="bg-[#666666] p-6 max-w-md flex justify-center">
          <p className="mb-4 text-sm leading-relaxed">
            Founder Shawanda Holsey began her journey with ESPN Events, where she coordinated high-profile sporting event pre-parties, VIP club seating experiences, and more. That foundation evolved into a full-service event planning company known for creativity, precision, and personalized service.
          </p>
          <p className="mb-6 text-sm leading-relaxed">
            From custom décor, balloon artistry to vendor selection and logistics, Lovely Events Group ensures every detail is handled with care. It’s that dedication, and our signature touch, that sets us apart.
          </p>

          <button className="bg-white text-black px-4 py-2 flex items-center gap-2 text-sm hover:bg-gray-100 transition">
            Reservation
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Right image section */}
      <div className="relative md:w-1/2 h-[400px] md:h-full">
        <img
          src="/images/design-mode/pexels-photo-2306281%281%29.jpeg"
          alt="Massage"
          className="object-cover w-full h-full"
        />
        {/* Optional arrow nav buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button className="bg-white/70 p-2 hover:bg-white transition">
            ←
          </button>
          <button className="bg-white/70 p-2 hover:bg-white transition">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
