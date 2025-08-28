import { useState } from 'react';
import Button from '../../../../../components/ui/Button';
import EditText from '../../../../../components/ui/EditText';
import Dropdown from '../../../../../components/ui/Dropdown';
import Section from '../../../../../components/layout/Section';

export default function CreditSimulation() {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');

  const loanTermOptions = [
    { label: '12 Meses', value: '12' },
    { label: '24 Meses', value: '24' },
    { label: '36 Meses', value: '36' },
    { label: '48 Meses', value: '48' },
    { label: '60 Meses', value: '60' },
    { label: '72 Meses', value: '72' },
    { label: '84 Meses', value: '84' },
    { label: '96 Meses', value: '96' },
    { label: '108 Meses', value: '108' },
    { label: '120 Meses', value: '120' }
  ];

  return (
    <Section id="simulacion" className="bg-global-1">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        <div className="flex-1 max-w-lg">
          <h2 className="font-plus-jakarta text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-global-10">
            Simula tu crédito por libranza
          </h2>
          
          <p className="mt-6 text-base md:text-lg leading-relaxed text-global-7">
            Usa nuestra calculadora para conocer el valor de tus cuotas, intereses y plazos disponibles.
          </p>
        </div>
        
        <div className="flex-1 max-w-lg">
          <div className="bg-global-11 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-lg font-normal text-global-9 mb-4">
                  Monto
                </label>
                <EditText
                  placeholder="1.000.000"
                  value={loanAmount}
                  onChange={setLoanAmount}
                  className="w-full"
                />
                <p className="mt-2 text-sm font-medium text-global-6">
                  Desde $1.000.000 hasta $150.000.000 COP
                </p>
              </div>
              
              <div>
                <label className="block text-lg font-normal text-global-9 mb-4">
                  Plazo
                </label>
                <Dropdown
                  placeholder="12"
                  options={loanTermOptions}
                  value={loanTerm}
                  onChange={(value) => setLoanTerm(String(value))}
                  rightIcon={{
                    src: "/images/img_arrowdown.svg",
                    width: 12,
                    height: 10
                  }}
                  className="w-full"
                />
                <p className="mt-2 text-sm font-medium text-global-6">
                  Hasta 120 Meses
                </p>
              </div>
            </div>
            
            <div className="w-full h-px bg-global-3 my-6"></div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-center capitalize text-global-9 mb-6">
                Tu resultado
              </h3>
              
              <div className="space-y-4">
                <p className="text-lg font-light capitalize text-global-7">
                  monto solicitado
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-light capitalize text-global-7">
                    Interés %* (N.M.V.)
                  </span>
                  <span className="text-lg font-light capitalize text-global-7">
                    1.80%
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium capitalize text-global-9">
                    tu cuota mensual
                  </span>
                  <span className="text-lg font-medium capitalize text-global-9">
                    $ 0 COP
                  </span>
                </div>
              </div>
            </div>
            
            <div className="w-full h-px bg-global-3 mb-6"></div>
            
            <Button 
              variant="primary"
              size="large"
              fullWidth
              className="mb-4"
            >
              Solicitar Credito
            </Button>
            
            <p className="text-sm font-medium text-center text-global-6">
              Sujeto a términos y condiciones de viabilidad para el otorgamiento del crédito
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

