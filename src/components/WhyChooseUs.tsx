const features = [
  {
    icon: "🏆",
    title: "IATA Certified",
    desc: "Internationally accredited travel agency ensuring the highest standards of service.",
  },
  {
    icon: "💰",
    title: "Best Rate Guarantee",
    desc: "We promise the most competitive pricing — find a lower rate and we'll match it.",
  },
  {
    icon: "🛡️",
    title: "Women Safety Program",
    desc: "Dedicated safety protocols and female-friendly travel options for solo women travelers.",
  },
  {
    icon: "⭐",
    title: "TripAdvisor Awarded",
    desc: "Consistently rated excellent by hundreds of travelers from around the world.",
  },
  {
    icon: "🕐",
    title: "24/7 Support",
    desc: "Round-the-clock assistance before, during, and after your trip.",
  },
  {
    icon: "🎯",
    title: "Personalized Trips",
    desc: "Every itinerary is tailored to your interests, pace, and budget.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Why Travelers <span className="text-accent">Choose Us</span>
          </h2>
          <p className="text-lg text-white/50 mt-4 max-w-2xl mx-auto">
            Trusted by hundreds of travelers worldwide — here&apos;s what sets
            us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500"
            >
              <span className="text-4xl block mb-4">{f.icon}</span>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-white/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
