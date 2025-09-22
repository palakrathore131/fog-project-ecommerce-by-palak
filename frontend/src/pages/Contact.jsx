
import FeaturesBar from "../components/Features";
import { HiLocationMarker, HiPhone, HiClock } from "react-icons/hi";

// Make sure to use a Tailwind config that includes font 'Montserrat' and 'Poppins'

export default function ContactPage() { 
  return (
    <div className="font-['Poppins','Montserrat',sans-serif] bg-white text-[#222]">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[300px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/Rectangle 1.png')" }}>
        <div className="absolute inset-0 "></div>
        <div className="relative w-full flex flex-col items-center pb-8">
          <img src="/img/Meubel House_Logos-05.png" alt="icon" className="h-12 mb-2" />
          <h1 className="text-3xl sm:text-4xl text-[#222] mb-2">Contact</h1>
          <div className="text-sm text-[#393737]">
           <span className="font-bold"> Home  </span>  <span className="mx-2 font-bold text-[#222] h-10">&gt;</span> Contact
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-3">Get In Touch With Us</h2>
        <p className="text-center text-[#9F9F9F] max-w-xl mx-auto mb-12 text-base sm:text-[15px] font-normal leading-6">
          For More Information About Our Product & Services, Please Feel Free To Drop Us An Email.
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Left Info */}
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-start">
              <HiLocationMarker className="text-2xl mt-0.5" />
              <div>
                <h3 className="font-semibold text-[17px] mb-1 text-[#222]">Address</h3>
                <p className="text-[#9F9F9F] text-[16px]">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <HiPhone className="text-2xl mt-0.5 " />
              <div>
                <h3 className="font-semibold text-[17px] mb-1 text-[#222]">Phone</h3>
                <p className="text-[#9F9F9F] text-[15px]">Mobile: (+84) 546-6789</p>
                <p className="text-[#9F9F9F] text-[15px]">Hotline: (+84) 456-6789</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <HiClock className="text-2xl mt-0.5 " />
              <div>
                <h3 className="font-semibold text-[17px] mb-1 text-[#222]">Working Time</h3>
                <p className="text-[#9F9F9F] text-[15px]">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-[#9F9F9F] text-[15px]">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-[#222] text-[15px] mb-1 font-medium">Your name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full border border-[#9F9F9F] rounded-lg p-3 bg-white text-[#222] placeholder-[#9F9F9F] focus:ring-2 focus:ring-[#B88E2F]"
              />
            </div>
            <div>
              <label className="block text-[#222] text-[15px] mb-1 font-medium">Email address</label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-full border border-[#9F9F9F] rounded-lg p-3 bg-white text-[#222] placeholder-[#9F9F9F] focus:ring-2 focus:ring-[#B88E2F]"
              />
            </div>
            <div>
              <label className="block text-[#222] text-[15px] mb-1 font-medium">Subject</label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full border border-[#9F9F9F] rounded-lg p-3 bg-white text-[#222] placeholder-[#9F9F9F] focus:ring-2 focus:ring-[#B88E2F]"
              />
            </div>
            <div>
              <label className="block text-[#222] text-[15px] mb-1 font-medium">Message</label>
              <textarea
                placeholder="Hi! I’d like to ask about…"
                rows={4}
                className="w-full border border-[#9F9F9F] rounded-lg p-3 bg-white text-[#222] placeholder-[#9F9F9F] focus:ring-2 focus:ring-[#B88E2F]"
              />
            </div>
            <button
              type="submit"
              className="w-[160px] bg-[#B88E2F] text-white h-[48px] rounded-md hover:bg-yellow-700 transition font-semibold block mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <FeaturesBar />
    </div>
  );
}
