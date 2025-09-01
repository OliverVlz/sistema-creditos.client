import { useState, useEffect } from 'react';
import { EjercitoHero } from './components/EjercitoHero';
import { InstitutionContent } from '../../../../components/business/InstitutionContent';

export default function EjercitoNacionalPage() {
  const [userType, setUserType] = useState<'pensionado' | 'activo'>('activo');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <EjercitoHero />

      <InstitutionContent
        institutionName="el Ejército Nacional"
        userType={userType}
        onUserTypeChange={setUserType}
      />
    </div>
  );
}
