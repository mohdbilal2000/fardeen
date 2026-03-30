const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "United States",
    rating: 5,
    text: "An absolutely magical experience! Our guide was incredibly knowledgeable and the sunrise at the Taj Mahal was the most breathtaking moment of my life. Highly recommend!",
    tour: "Same Day Taj Mahal Tour",
    avatar: "SM",
  },
  {
    name: "Marco Rossi",
    country: "Italy",
    rating: 5,
    text: "The Golden Triangle tour exceeded all expectations. Every detail was perfectly planned — from the hotels to the private car. True professionals who care about your experience.",
    tour: "Golden Triangle Tour",
    avatar: "MR",
  },
  {
    name: "Yuki Tanaka",
    country: "Japan",
    rating: 5,
    text: "I traveled solo as a woman and felt completely safe throughout. The women safety program is genuine and the team was always just a call away. Will definitely return!",
    tour: "Rajasthan Heritage Tour",
    avatar: "YT",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-amber-400 fill-amber-400"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="section-title mt-3">
            What Our <span className="text-primary">Travelers Say</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real stories from real travelers who trusted us with their Indian
            adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-primary/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <Stars count={t.rating} />
              <p className="text-gray-600 leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-dark">{t.name}</p>
                  <p className="text-sm text-gray-400">
                    {t.country} — {t.tour}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
