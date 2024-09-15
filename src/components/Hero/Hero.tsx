export const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/* Brand Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
            <div className="text-center md:text-left spacy-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal">
                Gym Gives you the perfect{" "}
                <span className="text-primary">Health</span>
              </h1>
              <p className="text-gray-600 xl:max-w-[500px]">
                It is a long established fact that a reader will be by readable
                content of a page when are the best product.
              </p>
              {/* Seccion de boton */}
              <div className="flex justify-center gap-8 md:justify-start">
                <button className="primary-btn flex items-center gap-2 mt-4">Ordenar Ahora</button>
                <button>Ver Ahora</button>
              </div>
            </div>
          </div>
          {/* Hero Image */}
        </div>
      </section>
    </>
  );
};
