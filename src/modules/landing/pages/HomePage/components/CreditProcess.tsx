import Button from '../../../../../components/ui/Button';

export default function CreditProcess() {
  const steps = [
    {
      number: "1",
      title: "Regístrate o inicia sesión",
      description: "Crea tu cuenta o accede con tus credenciales para guardar el avance de tu solicitud."
    },
    {
      number: "2", 
      title: "Haz clic en Solicitar y completa la información",
      description: "Ingresa tus datos básicos, selecciona tu perfil (pensionado, servidor público, militar o policía) y define el monto que deseas solicitar. Verás una estimación inmediata de tu cuota."
    },
    {
      number: "3",
      title: "Sube los documentos requeridos", 
      description: "Carga cédula, desprendible de pago y los soportes que te indiquemos; todo 100% digital."
    },
    {
      number: "4",
      title: "Envía tu solicitud",
      description: "Revisa el resumen y confirma. ¡Listo! Comenzamos el análisis."
    },
    {
      number: "5",
      title: "Recibe respuesta en menos de 24 h",
      description: "Te notificaremos por correo si tu solicitud fue aprobada. – Si es aprobada, un asesor se comunicará contigo para formalizar el desembolso. – Acto seguido, recibirás el dinero directamente en tu cuenta y las cuotas se descontarán automáticamente de tu salario o mesada pensional."
    }
  ];

  return (
    <section id="proceso" className="w-full bg-global-9 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-plus-jakarta text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-global-2">
            Solicitud de crédito
          </h2>
        </div>
        
        {/* Process Steps */}
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Step Number */}
              <div className="flex-shrink-0">
                {index === 4 ? (
                  <Button 
                    variant="primary"
                    className="w-12 h-12 sm:w-14 sm:h-14 text-xl sm:text-2xl font-extrabold bg-gradient-to-b from-orange-400 to-blue-600 rounded-full"
                  >
                    {step.number}
                  </Button>
                ) : (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-b from-orange-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="font-plus-jakarta text-xl sm:text-2xl font-extrabold text-white">
                      {step.number}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Step Content */}
              <div className="flex-1">
                <h3 className="font-plus-jakarta text-lg sm:text-xl md:text-2xl font-bold leading-tight text-global-1 mb-3">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-global-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

