import React from 'react';
import ejercitoImage from '../../../../../assets/images/landing/img_image_7.png';

export const EjercitoHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <img
                src={ejercitoImage}
                alt="Escudo del Ejército Nacional"
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-lg"
              />
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                  Ejército Nacional
                </h1>
                <p className="text-green-100 text-lg">Defensa y Honor Nacional</p>
              </div>
            </div>

            <p className="text-green-50 text-lg leading-relaxed mb-8 max-w-2xl">
              La institución militar más antigua de Colombia, encargada de la defensa nacional,
              el mantenimiento del orden público y la protección de la soberanía colombiana.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-gradient-to-r from-[#FF8546] to-[#4264A9] text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg">
                Solicitar Crédito
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-800 transition-all duration-200">
                Conocer Más
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <img
                src={ejercitoImage}
                alt="Ejército Nacional de Colombia"
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />

              {/* Floating Stats */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-800">200+</div>
                <div className="text-sm text-gray-600">Años de Servicio</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-800">50K+</div>
                <div className="text-sm text-gray-600">Hombres y Mujeres</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
