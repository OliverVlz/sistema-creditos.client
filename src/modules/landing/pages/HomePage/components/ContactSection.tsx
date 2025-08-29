import Button from '../../../../../components/ui/Button';
import emailIcon from '../../../../../assets/images/landing/img_group.svg';
import phoneIcon from '../../../../../assets/images/landing/img_phone.svg';
import locationIcon from '../../../../../assets/images/landing/img_location.svg';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: emailIcon,
      label: "Email",
      value: "inversionesmurillomartinez@outlook.es",
      iconClass: "w-4 h-3"
    },
    {
      icon: phoneIcon,
      label: "Teléfono",
      value: "315 8008588",
      iconClass: "w-6 h-4"
    },
    {
      icon: locationIcon,
      label: "Dirección",
      value: "Calle 25 N 12-27 110110 Bogotá, Colombia",
      iconClass: "w-7 h-5"
    }
  ];

  const formFields = [
    {
      label: "¿Cuál es tu nombre?*",
      required: true
    },
    {
      label: "¿Cuál es tu número de teléfono?*", 
      required: true,
      helpText: "Ingresa un número válido"
    },
    {
      label: "¿Cuál es tu email?",
      required: false
    },
    {
      label: "Escribe tus dudas o qué necesitas…",
      required: false
    }
  ];

  return (
    <section id="contacto" className="w-full bg-global-8 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div>
            <h2 className="font-plus-jakarta text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-global-3 shadow-sm mb-6">
              ¿Tienes dudas y necesitas ayuda?
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed text-global-6 shadow-sm mb-12">
              Cuéntanos qué necesitas. Te daremos una respuesta clara y te guiaremos hasta el desembolso.
            </p>
            
            <h3 className="font-plus-jakarta text-xl md:text-2xl font-medium leading-tight text-global-6 shadow-sm mb-6">
              Información de contacto
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img 
                    src={contact.icon}
                    alt={contact.label}
                    className={`${contact.iconClass} flex-shrink-0`}
                  />
                  <span className="text-sm md:text-base font-medium leading-relaxed text-global-6 shadow-sm">
                    {contact.value}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Business Hours */}
            <div>
              <h4 className="font-plus-jakarta text-base font-semibold leading-tight text-global-1 mb-2">
                Horario de atención
              </h4>
              <p className="text-base font-normal leading-tight text-global-1">
                Lunes a viernes de 8:00 a.m. a 5:00 p.m.
              </p>
            </div>
          </div>
          
          {/* Right Contact Form */}
          <div className="bg-global-7 rounded-3xl shadow-lg p-8 md:p-12">
            <h3 className="font-plus-jakarta text-xl md:text-2xl font-bold leading-tight text-global-6 mb-8">
              Solicita asesoría para tu crédito por libranza
            </h3>
            
            <form className="space-y-8 mb-8">
              {formFields.map((field, index) => (
                <div key={index}>
                  <label className="block text-sm md:text-base font-medium leading-tight text-global-6 mb-2">
                    {field.label}
                  </label>
                  <div className="w-full h-px bg-global-4 mb-1"></div>
                  {field.helpText && (
                    <p className="text-xs md:text-sm font-normal leading-tight text-global-6">
                      {field.helpText}
                    </p>
                  )}
                </div>
              ))}
            </form>
            
            {/* Submit Button */}
            <Button 
              variant="primary"
              size="large"
              fullWidth
              className="text-lg md:text-xl font-normal bg-gradient-to-r from-orange-400 to-blue-600 rounded-xl py-3"
            >
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

