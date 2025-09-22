export default function Hero() {
  return (
    <section className=" font-['Poppins','Montserrat',sans-serif] min-h-[540px] flex items-center justify-center overflow-hidden"  style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Room background */}
      <img
        src="/img/scandinavian-interior-mockup-wall-decal-background 1.png"
        alt="hero"
        className="w-full object-top md:object-center"
      />

      {/* Hero Content Block */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 md:right-20 md:top-1/3 md:-translate-y-0 bg-yellow-100/90 rounded-xl p-7 md:p-12 max-w-lg w-full shadow-xl
                      flex flex-col gap-3">
        <p className="uppercase text-base md:text-sm tracking-widest font-medium text-gray-700 mb-1">New Arrival</p>
        <h2   style={{ color: '#B88E2F' }} className="text-[2.1rem] md:text-4xl font-bold leading-tight">
          Discover Our<br />
          New Collection
        </h2>
        <p className="text-gray-700 text-base md:text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus, luctus nec ullamcorper mattis.
        </p>
        <button  style={{ backgroundColor: '#B88E2F' }} className="mt-6 hover:bg-yellow-800 transition text-white px-7 py-3 font-semibold
                           w-max text-base">
          Buy Now
        </button>
      </div>
    </section>
  );
}
