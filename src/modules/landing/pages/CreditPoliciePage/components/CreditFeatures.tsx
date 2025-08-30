export default function CreditFeatures() {
  const features = [
    {
      icon: "/images/img_vector_white_a700.svg",
      label: "Hasta",
      value: "5'000.000",
      iconClass: "w-6 h-8"
    },
    {
      icon: "/images/img_vector_white_a700_30x30.svg", 
      label: "Plazo",
      value: "36 Meses",
      iconClass: "w-8 h-8"
    },
    {
      icon: "/images/img_vector_30x30.svg",
      label: "Respuesta", 
      value: "1-24 Horas",
      iconClass: "w-8 h-8"
    },
    {
      icon: "/images/img_vector_white_a700_36x22.svg",
      label: "Proceso",
      value: "100% Digital",
      iconClass: "w-6 h-9"
    }
  ];

  return (
    <section className="w-full bg-global-11 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-global-7 rounded-2xl p-4">
              <div className="flex items-center gap-6 px-4">
                <img 
                  src={feature.icon}
                  alt={`${feature.label} icon`}
                  className={`${feature.iconClass} flex-shrink-0`}
                />
                <div>
                  <p className="text-base font-light text-global-1 font-plus-jakarta">
                    {feature.label}
                  </p>
                  <p className="text-xl font-extrabold text-global-15 font-plus-jakarta">
                    {feature.value}
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


















