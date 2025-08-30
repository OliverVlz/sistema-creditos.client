import { useState } from 'react';

export default function ProfileSelector() {
  const [selectedProfile, setSelectedProfile] = useState('active');

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="bg-global-11 rounded-3xl p-3 shadow-lg">
            <div className="flex items-center">
              {/* Pensionado Option */}
              <button 
                onClick={() => setSelectedProfile('pensionado')}
                className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                  selectedProfile === 'pensionado' 
                    ? 'bg-global-10 text-white rounded-2xl shadow-md' 
                    : 'text-global-1 hover:bg-gray-100 rounded-2xl'
                }`}
              >
                <img 
                  src="/images/img_vector_black_900.svg" 
                  alt="Pensionado icon" 
                  className="w-6 h-6"
                />
                <span className="text-lg font-medium font-plus-jakarta">
                  Pensionado
                </span>
              </button>

              {/* Activo Option */}
              <button 
                onClick={() => setSelectedProfile('active')}
                className={`flex items-center gap-3 px-6 py-3 ml-3 transition-all duration-200 ${
                  selectedProfile === 'active' 
                    ? 'bg-global-10 text-white rounded-2xl shadow-md' 
                    : 'text-global-1 hover:bg-gray-100 rounded-2xl'
                }`}
              >
                <img 
                  src="/images/img_vector_white_a700_26x30.svg" 
                  alt="Active icon" 
                  className="w-8 h-7"
                />
                <span className="text-lg font-bold font-plus-jakarta">
                  Activo
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


















