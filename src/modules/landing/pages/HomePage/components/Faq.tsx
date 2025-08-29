import { useState } from 'react';
import arrowDownOrangeIcon from '../../../../../assets/images/landing/img_icons_arrow_drop_down_48px_deep_orange_400_01.svg';
import arrowDownIcon from '../../../../../assets/images/landing/img_icons_arrow_drop_down_48px.svg';

export default function Faq() {
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

  const faqItems = [
    {
      question: '¿Qué es un crédito de libranza?',
      answer: 'Un crédito de libranza es un préstamo que se descuenta directamente de tu salario o pensión, ofreciendo tasas preferenciales y mayor facilidad de aprobación.'
    },
    {
      question: '¿Qué líneas de crédito ofrecemos?',
      answer: 'Ofrecemos créditos por libranza para pensionados y activos de las Fuerzas Militares y Policía Nacional, con montos desde $1.000.000 hasta $150.000.000.'
    },
    {
      question: '¿Cómo puedo obtener un crédito?',
      answer: 'Para obtener un crédito por libranza, simula tu cuota, regístrate o inicia sesión, haz clic en Solicitar, completa tus datos y el monto, y carga los documentos requeridos (cédula, desprendible de pago y certificación bancaria). Envía tu solicitud y en menos de 48 horas te notificaremos por correo el resultado; si es aprobada, un asesor te contactará contigo.'
    },
    {
      question: '¿A través de qué entidades puedo acceder al crédito de libranza?',
      answer: 'Puedes acceder a través de las Fuerzas Militares (Ejército, Armada, Fuerza Aeroespacial) y la Policía Nacional.'
    },
    {
      question: '¿Qué documentos necesito para solicitar un crédito?',
      answer: 'Necesitas cédula de ciudadanía, desprendible de pago actualizado, certificación bancaria y los documentos adicionales que te indiquemos según tu perfil.'
    },
    {
      question: '¿En cuánto tiempo se realiza el desembolso?',
      answer: 'Una vez aprobado tu crédito, el desembolso se realiza en un plazo máximo de 48 horas hábiles directamente a tu cuenta bancaria.'
    },
    {
      question: '¿Cuál es el monto mínimo y máximo de aprobación?',
      answer: 'El monto mínimo es de $1.000.000 COP y el máximo es de $150.000.000 COP, sujeto a tu capacidad de pago y perfil crediticio.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setSelectedFAQ(selectedFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-global-9 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-plus-jakarta text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-global-2">
            Preguntas frecuentes
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="overflow-hidden">
              {index === 2 ? (
                // Expanded FAQ item (pre-expanded)
                <div className="bg-global-7 rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-plus-jakarta text-lg md:text-xl font-medium leading-tight text-global-1 flex-1">
                      {item.question}
                    </h3>
                    <img
                      src={arrowDownOrangeIcon}
                      alt="Expanded"
                      className="w-6 h-6 flex-shrink-0"
                    />
                  </div>
                  <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-global-9">
                    {item.answer}
                  </p>
                </div>
              ) : (
                // Regular FAQ item
                <div 
                  className="bg-global-11 rounded-lg shadow-sm p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-plus-jakarta text-lg md:text-xl font-medium leading-tight text-global-8 flex-1">
                      {item.question}
                    </h3>
                    <img
                      src={arrowDownIcon}
                      alt="Expand"
                      className={`w-6 h-6 flex-shrink-0 transition-transform duration-200 ${selectedFAQ === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                  {selectedFAQ === index && (
                    <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-global-9">
                      {item.answer}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

