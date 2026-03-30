const tours = [
  {
    title: "Same Day Taj Mahal Sunrise Tour",
    location: "Delhi — Agra — Delhi",
    duration: "1 Day",
    price: "$45",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800",
  },
  {
    title: "Golden Triangle Tour",
    location: "Delhi — Agra — Jaipur",
    duration: "3–5 Days",
    price: "$200",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800",
  },
  {
    title: "Royal Rajasthan Heritage Tour",
    location: "Jaipur — Jodhpur — Udaipur — Jaisalmer",
    duration: "7–10 Days",
    price: "$380",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800",
  },
  {
    title: "Taj Mahal Photography Tour",
    location: "Agra",
    duration: "1 Day",
    price: "$125",
    tag: "Exclusive",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800",
  },
  {
    title: "Kashmir Paradise Tour",
    location: "Srinagar — Gulmarg — Pahalgam",
    duration: "5–7 Days",
    price: "$320",
    tag: "Adventure",
    image: "https://images.unsplash.com/photo-1597074866923-dc0e1b5e5e0e?q=80&w=800",
  },
  {
    title: "South India Temple Trail",
    location: "Bangalore — Mysore — Kerala",
    duration: "6–8 Days",
    price: "$350",
    tag: "Cultural",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800",
  },
];

const tagColors: Record<string, string> = {
  "Best Seller": "bg-red-500",
  Popular: "bg-primary",
  Premium: "bg-accent",
  Exclusive: "bg-purple-600",
  Adventure: "bg-blue-600",
  Cultural: "bg-amber-600",
};

export default function FeaturedTours() {
  return (
    <section id="tours" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Our Packages
          </span>
          <h2 className="section-title mt-3">
            Featured <span className="text-primary">Tour Packages</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Handcrafted itineraries designed to showcase the best of India at
            unbeatable prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((t) => (
            <div
              key={t.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${t.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span
                  className={`absolute top-4 left-4 ${tagColors[t.tag] || "bg-primary"} text-white text-xs font-bold px-3 py-1 rounded-full`}
                >
                  {t.tag}
                </span>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5">
                  <span className="font-bold text-primary text-lg">
                    {t.price}
                  </span>
                  <span className="text-gray-500 text-xs">/person</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {t.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {t.location}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {t.duration}
                  </div>
                  <a
                    href="#contact"
                    className="text-primary font-semibold text-sm hover:text-accent transition-colors flex items-center gap-1"
                  >
                    Book Now
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
