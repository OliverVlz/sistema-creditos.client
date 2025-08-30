import misionImage from '../../../../../assets/images/landing/mision1.png';
import visionImage from '../../../../../assets/images/landing/vision1.png';

export default function MissionVision() {
  return (
    <>
      {/* Sección Misión */}
      <section className="w-full bg-white py-20 md:py-28 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-600 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-500 rounded-full"></div>
        </div>

        {/* Patrón de puntos sutil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Texto Misión - Izquierda */}
            <div className="text-center lg:text-left relative">
              
              <h3 className="font-plus-jakarta text-2xl md:text-5xl font-bold text-gray-900 mb-8 relative">
                Nuestra Misión
              </h3>

              <div className="text-base md:text-base text-gray-700 leading-relaxed space-y-4 bg-white/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-orange-500">
                <p>
                  Brindar soluciones financieras responsables y accesibles mediante créditos por libranza para diferentes funcionarios del sector público, para promover y apoyar el cumplimiento de metas personales y familiares.
                </p>
                <p>
                  Esta compañía también contribuirá con el desarrollo económico nacional al participar de manera activa en sectores económicos como el mercado de valores, la producción y comercialización de bienes y servicios y la representación y agenciamiento de firmas nacionales e internacionales.
                </p>
                <p>
                  La compañía operará bajo los más altos estándares de integridad y con valores éticos y legales que garanticen transparencia, seguridad y confianza en todas sus operaciones.
                </p>
              </div>
            </div>

            {/* Imagen Misión - Derecha */}
            <div className="flex justify-center lg:justify-end relative">
              {/* Fondo decorativo detrás de la imagen */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full transform rotate-12 scale-110 opacity-30"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-20"></div>

              {/* Círculos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-100 rounded-full opacity-60"></div>

              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <img
                  src={misionImage}
                  alt="Nuestra Misión"
                  className="w-full max-w-md h-auto rounded-full shadow-2xl border-4 border-white"
                />
                {/* Efecto de brillo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador decorativo */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent my-8 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></div>
        <div className="absolute left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-600 rounded-full opacity-60"></div>
        <div className="absolute right-1/3 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-500 rounded-full opacity-60"></div>
      </div>

      {/* Sección Visión */}
      <section className="w-full bg-global-11 py-20 md:py-28 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-28 h-28 bg-orange-500 rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-20 h-20 bg-orange-600 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-yellow-500 rounded-full"></div>
        </div>

        {/* Patrón de líneas sutil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, #f97316 1px, transparent 1px)',
            backgroundSize: '25px 25px'
          }}></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Imagen Visión - Izquierda */}
            <div className="flex justify-center lg:justify-start relative">
              {/* Fondo decorativo detrás de la imagen */}
              <div className="absolute inset-0 bg-gradient-to-bl from-orange-100 to-yellow-100 rounded-lg transform -rotate-6 scale-105 opacity-40"></div>
              <div className="absolute -inset-2 bg-gradient-to-bl from-orange-200 to-yellow-200 rounded-lg opacity-30"></div>

              {/* Triángulos decorativos */}
              <div className="absolute -top-2 -left-2 w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-orange-500"></div>
              <div className="absolute -bottom-2 -right-2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-yellow-500"></div>

              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <img
                  src={visionImage}
                  alt="Nuestra Visión"
                  className="w-full max-w-md h-auto rounded-lg shadow-2xl border-4 border-white relative"
                />
                {/* Marco decorativo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg opacity-20"></div>
                {/* Efecto de overlay al hacer hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-orange-500/20 via-transparent to-yellow-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Texto Visión - Derecha */}
            <div className="text-center lg:text-right relative">
              {/* Línea decorativa */}
              <div className="absolute -right-4 top-0 w-1 h-16 bg-gradient-to-b from-orange-500 to-yellow-500 lg:block hidden"></div>

              <h3 className="font-plus-jakarta text-2xl md:text-5xl font-bold text-gray-900 mb-8 relative">
                Nuestra Visión
                {/* Elementos decorativos pequeños */}
                <div className="absolute -top-1 -left-3 w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="absolute -bottom-1 -right-3 w-2 h-2 bg-yellow-500 rounded-full"></div>
              </h3>

              <div className="text-base md:text-base text-gray-700 leading-relaxed space-y-4 bg-white/30 backdrop-blur-sm p-6 rounded-lg border-r-4 border-orange-500">
                <p>
                  Para 2030 Inversiones Murillo Martínez será reconocida como empresa líder y competitiva en el mercado de créditos por libranza para funcionario públicos, en el ámbito nacional.
                </p>
                <p>
                  Durante este quinquenio, Inversiones Murillo Martínez se destacará por su solidez financiera, innovación en servicios, calidad humana y compromiso con el crecimiento económico de sus clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

