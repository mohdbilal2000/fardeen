const images = [
  { src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600", alt: "Taj Mahal at sunrise" },
  { src: "https://images.unsplash.com/photo-1585135497273-1a86d9d4e7a4?q=80&w=600", alt: "Hawa Mahal Jaipur" },
  { src: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=600", alt: "Rajasthan desert" },
  { src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=600", alt: "India Gate Delhi" },
  { src: "https://images.unsplash.com/photo-1597074866923-dc0e1b5e5e0e?q=80&w=600", alt: "Kashmir valley" },
  { src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600", alt: "Kerala backwaters" },
  { src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=600", alt: "Jaisalmer fort" },
  { src: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=600", alt: "Varanasi ghats" },
];

export default function Gallery() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Gallery
          </span>
          <h2 className="section-title mt-3">
            Moments from <span className="text-primary">Our Tours</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A glimpse into the incredible experiences our travelers enjoy across
            India.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl break-inside-avoid"
            >
              <div
                className="w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url('${img.src}')`,
                  paddingBottom: `${i % 3 === 0 ? "130%" : i % 2 === 0 ? "100%" : "75%"}`,
                }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-center justify-center">
                <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm text-center px-4">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
