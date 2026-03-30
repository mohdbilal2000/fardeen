export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071')",
        }}
      />
      <div className="absolute inset-0 gradient-overlay" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-28 md:pt-32 pb-24 md:pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 md:mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
              Premium India Tours
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 md:mb-6">
            Discover the
            <span className="block text-accent italic font-medium">
              Magic of India
            </span>
          </h1>

          <p className="text-base md:text-xl text-white/80 leading-relaxed mb-8 md:mb-10 max-w-xl">
            From the majestic Taj Mahal to the golden deserts of Rajasthan —
            experience India like never before with curated journeys crafted
            just for you.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <a href="#tours" className="btn-accent text-base md:text-lg !py-3 md:!py-4 !px-8 md:!px-10">
              Explore Tours
              <svg
                className="w-5 h-5"
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
            </a>
            <a href="#about" className="btn-outline text-base md:text-lg !py-3 md:!py-4 !px-8 md:!px-10">
              Learn More
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-6 md:gap-8 mt-10 md:mt-16 pt-6 md:pt-8 border-t border-white/20">
            {[
              { num: "7+", label: "Years Experience" },
              { num: "500+", label: "Happy Travelers" },
              { num: "50+", label: "Tour Packages" },
              { num: "24/7", label: "Customer Support" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-4xl font-bold text-accent">
                  {s.num}
                </p>
                <p className="text-white/60 text-xs md:text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator — hidden on mobile to avoid overlapping stats */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float">
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
