const destinations = [
  {
    name: "Agra",
    subtitle: "City of Love",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800",
    tours: 12,
  },
  {
    name: "Jaipur",
    subtitle: "Pink City",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800",
    tours: 8,
  },
  {
    name: "Delhi",
    subtitle: "Capital Heritage",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800",
    tours: 10,
  },
  {
    name: "Udaipur",
    subtitle: "City of Lakes",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800",
    tours: 6,
  },
  {
    name: "Jaisalmer",
    subtitle: "Golden City",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800",
    tours: 5,
  },
  {
    name: "Kashmir",
    subtitle: "Paradise on Earth",
    image: "https://images.unsplash.com/photo-1597074866923-dc0e1b5e5e0e?q=80&w=800",
    tours: 7,
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Where To Go
          </span>
          <h2 className="section-title mt-3">
            Popular <span className="text-primary">Destinations</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore the most sought-after destinations across India, each with
            its own unique charm.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {destinations.map((d, i) => (
            <a
              key={d.name}
              href="#contact"
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "row-span-2 min-h-[300px] md:min-h-[500px]" : "min-h-[200px] md:min-h-[240px]"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${d.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <p className="text-white/70 text-xs md:text-sm font-medium">
                  {d.subtitle}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {d.name}
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  {d.tours} tours available
                </p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
