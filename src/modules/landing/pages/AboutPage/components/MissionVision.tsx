import misionImage from '../../../../../assets/images/landing/mision1.png';
import visionImage from '../../../../../assets/images/landing/vision1.png';

export default function MissionVision() {
  return (
    <>
      {/* Sección Misión */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Texto Misión - Izquierda */}
            <div className="text-center lg:text-left">
              <h3 className="font-plus-jakarta text-2xl md:text-5xl font-bold text-gray-900 mb-8">
                Nuestra Misión
              </h3>
              <div className="text-base md:text-base text-gray-700 leading-relaxed space-y-4">
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
            <div className="flex justify-center lg:justify-end">
              <img
                src={misionImage}
                alt="Nuestra Misión"
                className="w-full max-w-md h-auto rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Visión */}
      <section className="w-full bg-global-11 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Imagen Visión - Izquierda */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={visionImage}
                alt="Nuestra Visión"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Texto Visión - Derecha */}
            <div className="text-center lg:text-right">
              <h3 className="font-plus-jakarta text-2xl md:text-5xl font-bold text-gray-900 mb-8">
                Nuestra Visión
              </h3>
              <div className="text-base md:text-base text-gray-700 leading-relaxed space-y-4">
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

