export default function CreditHero() {
  return (
    <section className="w-full bg-global-11 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1">
            {/* Police Badge */}
            <div className="inline-flex items-center gap-4 bg-global-10 text-white px-12 py-2 rounded-2xl mb-8">
              <img 
                src="/images/img_vector.svg" 
                alt="Police badge" 
                className="w-4 h-6"
              />
              <span className="text-lg font-bold font-plus-jakarta">
                Policía Nacional
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-global-2 uppercase leading-tight mb-8 font-plus-jakarta">
              Crédito por Libranza
            </h1>

            {/* Description */}
            <div className="text-base md:text-lg font-medium text-global-5 leading-relaxed space-y-4 font-plus-jakarta">
              <p>
                Como parte de las Fuerzas Armadas de Colombia, puedes acceder a un crédito por libranza hecho a tu medida. Tramítalo desde donde estés, con asesoría personalizada y sin preocuparte por los pagos: las cuotas se descuentan automáticamente de tu nómina. Para tu tranquilidad, nuestras pólizas te protegen ante imprevistos: si algo sucede, cubren el saldo de tu crédito y respaldan a tu familia.
              </p>
              <p>
                Elige tu perfil para ver requisitos y beneficios personalizados
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-96 h-96">
            <img 
              src="/images/img_image_7.png" 
              alt="Military officer" 
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

















