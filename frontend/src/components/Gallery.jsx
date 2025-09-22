export default function Gallery() {
  const imgs = [
    "/img/Rectangle 36.png", // Left tall
    "/img/Rectangle 37.png", // Desk
    "/img/Rectangle 38.png", // Bedroom
    "/img/Rectangle 39.png", // Dining
    "/img/Rectangle 40.png", // Chair
    "/img/Rectangle 41.png", // Flower vase
    "/img/Rectangle 43.png", // Frame
    "/img/Rectangle 44.png", // Kitchen
    "/img/Rectangle 45.png", // Shelf
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-sm text-gray-400 font-semibold mb-8 font-['Poppins','Montserrat',sans-serif]">
        Share your setup with <br />{" "}
        <span className="text-black text-3xl">#FuniroFurniture</span>
      </h2>

      {/* Masonry Layout */}
      <div className="max-w-6xl mx-auto columns-3 md:columns-4 gap-4 space-y-4">
        {imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="gallery"
            className="w-full rounded-lg object-cover hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}