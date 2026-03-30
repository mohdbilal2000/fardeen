const images = [
  { src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600", alt: "Taj Mahal at sunrise" },
  { src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=600", alt: "Hawa Mahal Jaipur" },
  { src: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600", alt: "Taj Mahal reflection" },
  { src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=600", alt: "India Gate Delhi" },
  { src: "https://images.unsplash.com/photo-1597074866923-dc0e1b5e5e0e?q=80&w=600", alt: "Kashmir valley" },
  { src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600", alt: "Kerala backwaters" },
  { src: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=600", alt: "Varanasi ghats" },
  { src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600", alt: "Taj Mahal front view" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-end p-4">
                <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm">
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
