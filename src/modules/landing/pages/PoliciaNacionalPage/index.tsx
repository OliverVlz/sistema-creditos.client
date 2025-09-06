import { useState, useEffect } from 'react';
import { PoliciaHero } from './components/PoliciaHero';
import { InstitutionContent } from '../../../../components/business/InstitutionContent';

export default function PoliciaNacionalPage() {
  const [userType, setUserType] = useState<'pensionado' | 'activo'>('pensionado');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PoliciaHero />

      <InstitutionContent
        institutionName="la Policía Nacional"
        gradientColors={{ from: 'from-red-600', to: 'to-red-700' }}
        userType={userType}
        onUserTypeChange={setUserType}
        isPolice={true}
      />
    </div>
  );
}
