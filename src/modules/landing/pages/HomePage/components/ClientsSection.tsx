export default function ClientsSection() {
  const clients = [
    {
      name: "Ejercito Nacional",
      image: "/images/img_image_7.png"
    },
    {
      name: "Armada Nacional", 
      image: "/images/img_image_10.png"
    },
    {
      name: "Fuerza Aeroespacial",
      image: "/images/img_image_9_226x226.png"
    },
    {
      name: "Policía Nacional",
      image: "/images/img_image_8.png"
    }
  ];

  return (
    <section id="clientes" className="w-full bg-global-11 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-plus-jakarta text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-global-2 mb-6">
            Nuestros clientes
          </h2>
          
          <p className="text-base md:text-lg leading-relaxed text-global-4 max-w-4xl mx-auto">
            Sabemos lo que significa servir al país. Por eso ofrecemos créditos por libranza para pensionados y activos del Ejército, Armada, Fuerza Aeroespacial y Policía Nacional, con transparencia total, sin costos ocultos y acompañamiento personalizado hasta el desembolso
          </p>
        </div>
        
        {/* Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <img 
                  src={client.image}
                  alt={client.name}
                  className="w-full max-w-[200px] h-auto rounded-2xl mx-auto shadow-lg" 
                />
              </div>
              <h3 className="font-plus-jakarta text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-global-4">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

