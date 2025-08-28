import React, { useState, useEffect } from 'react';

interface CalculatorProps {
  loanAmount: string;
  loanTerm: string;
  interestRate?: number;
  className?: string;
}

interface CalculationResult {
  monthlyPayment: number;
  totalInterest: number;
  totalAmount: number;
  effectiveRate: number;
}

const Calculator: React.FC<CalculatorProps> = ({ 
  loanAmount, 
  loanTerm, 
  interestRate = 1.80,
  className = ''
}) => {
  const [result, setResult] = useState<CalculationResult>({
    monthlyPayment: 0,
    totalInterest: 0,
    totalAmount: 0,
    effectiveRate: 0
  });

  useEffect(() => {
    if (loanAmount && loanTerm) {
      calculateLoan();
    }
  }, [loanAmount, loanTerm, interestRate]);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount.replace(/[^\d]/g, ''));
    const months = parseInt(loanTerm);
    
    if (principal > 0 && months > 0) {
      const monthlyRate = interestRate / 100 / 12;
      const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      const totalAmount = monthlyPayment * months;
      const totalInterest = totalAmount - principal;
      const effectiveRate = ((Math.pow(1 + monthlyRate, 12) - 1) * 100);

      setResult({
        monthlyPayment,
        totalInterest,
        totalAmount,
        effectiveRate
      });
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (rate: number) => {
    return `${rate.toFixed(2)}%`;
  };

  return (
    <div className={`bg-global-11 rounded-xl p-6 shadow-lg ${className}`}>
      <h3 className="text-xl font-bold text-center capitalize text-global-9 mb-6">
        Resultado de tu simulación
      </h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center py-2 border-b border-global-3">
          <span className="text-base font-medium text-global-7">
            Monto solicitado
          </span>
          <span className="text-lg font-semibold text-global-9">
            {loanAmount ? formatCurrency(parseFloat(loanAmount.replace(/[^\d]/g, ''))) : '$ 0 COP'}
          </span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-global-3">
          <span className="text-base font-medium text-global-7">
            Plazo
          </span>
          <span className="text-lg font-semibold text-global-9">
            {loanTerm ? `${loanTerm} meses` : '0 meses'}
          </span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-global-3">
          <span className="text-base font-medium text-global-7">
            Tasa de interés (N.M.V.)
          </span>
          <span className="text-lg font-semibold text-global-9">
            {formatPercentage(interestRate)}
          </span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-global-3">
          <span className="text-base font-medium text-global-7">
            Tasa efectiva anual
          </span>
          <span className="text-lg font-semibold text-global-9">
            {formatPercentage(result.effectiveRate)}
          </span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-global-3">
          <span className="text-base font-medium text-global-7">
            Cuota mensual
          </span>
          <span className="text-lg font-semibold text-global-10">
            {formatCurrency(result.monthlyPayment)}
          </span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-global-3">
          <span className="text-base font-medium text-global-7">
            Total intereses
          </span>
          <span className="text-lg font-semibold text-global-9">
            {formatCurrency(result.totalInterest)}
          </span>
        </div>
        
        <div className="flex justify-between items-center py-3 bg-global-2 rounded-lg px-4">
          <span className="text-lg font-bold text-global-9">
            Total a pagar
          </span>
          <span className="text-xl font-bold text-global-10">
            {formatCurrency(result.totalAmount)}
          </span>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700 text-center">
          * Los valores son aproximados y pueden variar según la aprobación final del crédito
        </p>
      </div>
    </div>
  );
};

export default Calculator;
