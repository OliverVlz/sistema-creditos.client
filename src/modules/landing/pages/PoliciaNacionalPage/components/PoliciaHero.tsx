import React from 'react';
import policiaImage from '../../../../../assets/images/landing/img_image_8.png';

export const PoliciaHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <img
                src={policiaImage}
                alt="Escudo de la Policía Nacional"
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-lg"
              />
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                  Policía Nacional
                </h1>
                <p className="text-red-100 text-lg">Protección y Servicio Ciudadano</p>
              </div>
            </div>

            <p className="text-red-50 text-lg leading-relaxed mb-8 max-w-2xl">
              La institución encargada del mantenimiento del orden público y la seguridad
              ciudadana en Colombia, con presencia en todo el territorio nacional.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-gradient-to-r from-[#FF8546] to-[#4264A9] text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg">
                Solicitar Crédito
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-800 transition-all duration-200">
                Conocer Más
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <img
                src={policiaImage}
                alt="Policía Nacional de Colombia"
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />

              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-red-800">180K</div>
                <div className="text-sm text-gray-600">Policías</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-red-800">1100+</div>
                <div className="text-sm text-gray-600">Municipios</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
