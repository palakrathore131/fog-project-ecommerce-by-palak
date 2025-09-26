export default function Inspiration() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:pl-20 lg:pr-0 py-10 lg:py-16 bg-[#FFFCF6] font-['Poppins','Montserrat',sans-serif]">
      {/* Left Content */}
      <div className="max-w-md lg:max-w-sm lg:ml-40 text-center lg:text-left mb-10 lg:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Our designer already made a lot of beautiful prototype of rooms that inspire you.
        </p>
        <button className="mt-5 bg-yellow-700 text-white px-6 py-2 rounded">
          Explore More
        </button>
      </div>

      {/* Image Cards */}
      <div className="flex gap-6 lg:gap-8 items-center flex-wrap justify-center">
        {/* 1st (Main) image */}
        <div className="relative w-[260px] md:w-[300px] lg:w-[320px] h-[360px] md:h-[400px] lg:h-[420px] bg-white rounded-lg overflow-hidden shadow">
          <img
            src="/img/Rectangle 24.png"
            alt="room"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-0 bottom-0 w-full flex flex-col items-start px-4 py-3 bg-white/95">
            <span className="text-xs text-gray-400">01 — Bed Room</span>
            <div className="flex items-center justify-between w-full mt-1">
              <span className="font-bold text-lg md:text-xl text-gray-900">
                Inner Peace
              </span>
              <button className="bg-yellow-500 text-white rounded-tr rounded-br px-2 py-1 ml-2 flex items-center">
                <span className="text-lg md:text-xl">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2nd image with arrow */}
        <div className="relative w-[200px] md:w-[240px] lg:w-[260px] h-[280px] md:h-[330px] lg:h-[360px] bg-white rounded-lg flex-shrink-0">
          <img
            src="/img/Rectangle 25.png"
            alt="room"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Next button */}
          <button className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-white border shadow p-2 rounded-full">
            <span className="text-yellow-600 text-base md:text-lg">→</span>
          </button>

          {/* Pagination dots */}
          <div className="flex gap-2 mt-3 justify-center">
            <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-300 rounded-full block border-2 border-yellow-600"></span>
            <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-300 rounded-full block"></span>
            <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-300 rounded-full block"></span>
            <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-300 rounded-full block"></span>
          </div>
        </div>

        {/* 3rd image */}
        <div className="hidden md:block w-[20px] md:w-[30px] h-[280px] md:h-[330px] lg:h-[360px] bg-white rounded-lg overflow-hidden flex-shrink-0 relative">
          <img
            src="/img/Rectangle 26.png"
            alt="room"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
