export default function Category() {
  const categories = [
    { title: "Dining", img: "/img/22.png" },
    { title: "Living", img: "/img/Image-living room.png" },
    { title: "Bedroom", img: "/img/11.png" },
  ];

  return (
    <section className="py-16 text-center font-[Poppins,Montserrat,sans-serif]">
      <h2 className="text-2xl font-bold mb-2">Browse The Range</h2>
      <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
        {categories.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-xl transition p-4 flex flex-col items-center"
          >
            <img
              src={c.img}
              alt={c.title}
              className="rounded-lg object-cover w-full h-86"
            />
            <h3 className="mt-4 text-lg">{c.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
