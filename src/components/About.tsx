export default function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="h-64 rounded-2xl bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1585135497273-1a86d9d4e7a4?q=80&w=800')",
                  }}
                />
                <div
                  className="h-48 rounded-2xl bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800')",
                  }}
                />
              </div>
              <div className="space-y-4 pt-8">
                <div
                  className="h-48 rounded-2xl bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800')",
                  }}
                />
                <div
                  className="h-64 rounded-2xl bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800')",
                  }}
                />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl hidden md:block">
              <p className="text-3xl font-bold">7+</p>
              <p className="text-sm text-white/80">Years of Trust</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              About Us
            </span>
            <h2 className="section-title mt-3 mb-6">
              Your Gateway to
              <span className="text-primary"> Incredible India</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are a team of passionate travel experts based in Agra, the city
              of the Taj Mahal. With over seven years of experience, we
              specialize in crafting personalized tour experiences that go beyond
              the ordinary.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you dream of exploring the royal palaces of Rajasthan,
              witnessing the sunrise at the Taj Mahal, or venturing into the
              serene valleys of Kashmir — we make every journey unforgettable.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: "🏛️", title: "Expert Guides", desc: "Certified local professionals" },
                { icon: "💎", title: "Best Rates", desc: "Guaranteed competitive pricing" },
                { icon: "🛡️", title: "Safe Travel", desc: "Women safety priority" },
                { icon: "✨", title: "Custom Trips", desc: "Tailored to your preferences" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-dark">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Get in Touch
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
