const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen">
      {/* google maps view of dealer */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1715319582829!6m8!1m7!1sS6qKPM-RbLjnt97wX1BGSA!2m2!1d41.91845296556709!2d-87.88410803225428!3f295.48688377800886!4f-2.2532981660680633!5f0.7820865974627469"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Prevents map from moving */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Overlayed text */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 p-8 bg-white bg-opacity-60 rounded-lg shadow-lg backdrop-blur-lg">
        <h1 className="text-4xl font-bold text-neutral-900">Shop Affordable Cars</h1>
        <p className="text-lg text-neutral-800 max-w-md">
          Lakes Auto Sales offers a curated selection of top-quality vehicles for every driver.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
          Shop Our Inventory
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
