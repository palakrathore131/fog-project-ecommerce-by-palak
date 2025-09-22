export default function FeaturesBar() {
  return (
    <div className="bg-[#FFF3E3] py-16 font-['Poppins','Montserrat',sans-serif]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        
        {/* High Quality */}
        <div className="flex items-center gap-1">
          <img
            src="/img/trophy 1.png"
            alt="High Quality"
            className="w-14 h-14 p-2 hover:scale-105 transition-transform cursor-pointer"
          />
          <div>
            <h4 className="font-semibold text-[#222] text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              High Quality
            </h4>
            <p className="text-[#898989] text-sm font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Crafted from top materials
            </p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex items-center gap-1">
          <img
            src="/img/guarantee.png"
            alt="Warranty Protection"
            className="w-14 h-14 p-2 hover:scale-105 transition-transform cursor-pointer"
          />
          <div>
            <h4 className="font-semibold text-[#222] text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Warranty Protection
            </h4>
            <p className="text-[#898989] text-sm font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Over 2 years
            </p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex items-center gap-1">
          <img
            src="/img/shipping.png"
            alt="Free Shipping"
            className="w-14 h-14 p-2 hover:scale-105 transition-transform cursor-pointer"
          />
          <div>
            <h4 className="font-semibold text-[#222] text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Free Shipping
            </h4>
            <p className="text-[#898989] text-sm font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Order over 150 $
            </p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center gap-1">
          <img
            src="/img/customer-support.png"
            alt="24/7 Support"
            className="w-14 h-14 p-1 hover:scale-105 transition-transform cursor-pointer"
          />
          <div>
            <h4 className="font-semibold text-[#222] text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              24 / 7 Support
            </h4>
            <p className="text-[#898989] text-sm font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Dedicated support
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
