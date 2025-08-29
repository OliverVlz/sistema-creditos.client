import { useState } from 'react';
import { ArmadaHero } from './components/ArmadaHero';
import Section from '../../../../components/layout/Section';

export default function ArmadaNacionalPage() {
  const [userType, setUserType] = useState<'pensionado' | 'activo'>('activo');

  const miniCards = [
    { icon: '💰', title: 'Hasta', value: '5\'000.000', subtitle: 'Monto máximo' },
    { icon: '⏰', title: 'Plazo', value: '36 Meses', subtitle: 'Hasta 36 meses' },
    { icon: '⚡', title: 'Respuesta', value: '1-24 Horas', subtitle: 'Tiempo de aprobación' },
    { icon: '💻', title: 'Proceso', value: '100% Digital', subtitle: 'Completamente online' }
  ];

  const documentsPensionado = [
    { number: '1.', title: 'Cédula', description: 'Ambos respaldos' },
    { number: '2.', title: 'Comprobante de pago', description: 'De mesada pensional' }
  ];

  const documentsActivo = [
    { number: '1.', title: 'Cédula', description: 'Ambos respaldos' },
    { number: '2.', title: 'Comprobante de pago', description: 'De nómina mensual' },
    { number: '3.', title: 'Constancia de tiempo', description: 'De servicio activo' }
  ];

  const currentDocuments = userType === 'pensionado' ? documentsPensionado : documentsActivo;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ArmadaHero />

      {/* Sección de Información General */}
      <Section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl text-global-7 leading-relaxed max-w-4xl mx-auto mb-8">
            Como parte de las Fuerzas Armadas de Colombia, puedes acceder a un crédito por libranza
            hecho a tu medida. Tramítalo desde donde estés, con asesoría personalizada y sin preocuparte
            por los pagos: las cuotas se descuentan automáticamente de tu nómina.
          </p>
          <p className="text-lg text-global-6 max-w-3xl mx-auto mb-12">
            Para tu tranquilidad, nuestras pólizas te protegen ante imprevistos: si algo sucede,
            cubren el saldo de tu crédito y respaldan a tu familia.
          </p>
          <p className="text-lg font-semibold text-global-12">
            Elige tu perfil para ver requisitos y beneficios personalizados
          </p>
        </div>
      </Section>

      {/* 4 Mini Cards */}
      <Section className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {miniCards.map((card, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-4xl mb-3">{card.icon}</div>
                <div className="text-sm text-global-6 mb-1">{card.title}</div>
                <div className="text-2xl font-bold text-global-12 mb-1">{card.value}</div>
                <div className="text-xs text-global-6">{card.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Sección de Documentos */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-global-12 mb-8 text-center">
              Documentos Requeridos
            </h2>

            {/* Botones para cambiar entre pensionado/activo */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setUserType('activo')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    userType === 'activo'
                      ? 'bg-[#FF8546] text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Personal Activo
                </button>
                <button
                  onClick={() => setUserType('pensionado')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    userType === 'pensionado'
                      ? 'bg-[#FF8546] text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Pensionados
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Documentos Necesarios */}
              <div>
                <h3 className="text-xl font-semibold text-global-12 mb-6">
                  Documentos necesarios
                </h3>
                <div className="space-y-4">
                  {currentDocuments.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="text-[#FF8546] font-bold text-lg">{doc.number}</span>
                      <div>
                        <h4 className="font-semibold text-global-12">{doc.title}</h4>
                        <p className="text-global-6 text-sm">{doc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formato de Entrega */}
              <div>
                <h3 className="text-xl font-semibold text-global-12 mb-6">
                  Formato de entrega
                </h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-global-12 mb-2">Cédula</h4>
                    <ul className="text-sm text-global-6 space-y-1">
                      <li>• Debe ser legible y nítida por ambos respaldos</li>
                      <li>• Debe ir en formato PDF</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-global-12 mb-2">
                      Comprobante de pago de {userType === 'pensionado' ? 'mesada' : 'nómina'}
                    </h4>
                    <ul className="text-sm text-global-6 space-y-1">
                      <li>• Debe ser legible y no más antiguo de los últimos dos meses</li>
                      <li>• Debe ir en formato PDF</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-[#FF8546]">
                    <h4 className="font-semibold text-global-12 mb-2">Archivo comprimido</h4>
                    <p className="text-sm text-global-6">
                      Ambos documentos PDF, cédula y comprobante de pago de {userType === 'pensionado' ? 'mesada' : 'nómina'}
                      deben ser subidos a la plataforma en un solo archivo comprimido (.zip o .rar)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sección de Tasas y Tarifas */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-global-12 mb-8 text-center">
              Tasas y Tarifas
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Columna 1 - Desde */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-global-12 mb-4">Desde</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">1.86%</div>
                <div className="text-global-6">Mes vencido</div>
                <div className="text-sm text-global-6 mt-2">(24.75% Efectiva Anual)</div>
              </div>

              {/* Columna 2 - Hasta */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-global-12 mb-4">Hasta</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">1.91%</div>
                <div className="text-global-6">Mes vencido</div>
                <div className="text-sm text-global-6 mt-2">(25.49% Efectiva Anual)</div>
              </div>
            </div>

            {/* Detalles */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-global-12 mb-4">Detalles</h3>
              <div className="space-y-3 text-global-6">
                <p>• Tasas y plazos varían según el empleador y el perfil crediticio del cliente</p>
                <p>• Tasa máxima legal permitida para Junio 2025: <strong>25.55% E.A</strong></p>
                <p>• <a href="#" className="text-[#FF8546] hover:underline">Políticas de crédito disponibles aquí</a></p>
                <p className="text-sm text-gray-500">Fecha de actualización: Junio 5 de 2025</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action Final */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para solicitar tu crédito?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Como integrante de la Armada Nacional, tienes acceso a condiciones especiales
            para créditos por libranza con tasas preferenciales adaptadas a tu servicio naval.
          </p>
          <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg">
            Solicitar Crédito Ahora
          </button>
        </div>
      </Section>
    </div>
  );
}
