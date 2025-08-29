import React, { useState } from 'react';
import { FuerzaAereaHero } from './components/FuerzaAereaHero';
import { InstitutionContent } from '../../../../components/business/InstitutionContent';

export default function FuerzaAeroespacialPage() {
  const [userType, setUserType] = useState<'pensionado' | 'activo'>('activo');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <FuerzaAereaHero />

      <InstitutionContent
        institutionName="la Fuerza Aeroespacial"
        gradientColors={{ from: 'from-sky-600', to: 'to-sky-700' }}
        description="Dominio del Cielo Colombiano"
        userType={userType}
        onUserTypeChange={setUserType}
      />
    </div>
  );
}
