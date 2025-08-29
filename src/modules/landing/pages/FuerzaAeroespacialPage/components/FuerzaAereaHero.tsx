import React from 'react';
import fuerzaAereaImage from '../../../../../assets/images/landing/img_image_9_226x226.png';

export const FuerzaAereaHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <img
                src={fuerzaAereaImage}
                alt="Escudo de la Fuerza Aeroespacial"
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-lg"
              />
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                  Fuerza Aeroespacial
                </h1>
                <p className="text-sky-100 text-lg">Dominio del Cielo Colombiano</p>
              </div>
            </div>

            <p className="text-sky-50 text-lg leading-relaxed mb-8 max-w-2xl">
              La fuerza aérea colombiana, especializada en operaciones aéreas y defensa
              del espacio aéreo nacional, con tecnología de vanguardia y pilotos altamente capacitados.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-gradient-to-r from-[#FF8546] to-[#4264A9] text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg">
                Solicitar Crédito
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-sky-800 transition-all duration-200">
                Conocer Más
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <img
                src={fuerzaAereaImage}
                alt="Fuerza Aeroespacial Colombiana"
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />

              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-sky-800">250+</div>
                <div className="text-sm text-gray-600">Aeronaves</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-sky-800">12K+</div>
                <div className="text-sm text-gray-600">Aviadores</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
