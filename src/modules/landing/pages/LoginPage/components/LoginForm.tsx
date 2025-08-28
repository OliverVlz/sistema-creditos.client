import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../../components/ui/Button';
import EditText from '../../../../../components/ui/EditText';
import logoColor from '../../../../../assets/images/ui/logo-color.png';

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
    // Por ahora redirigir directamente al dashboard
    navigate('/dashboard');
  };

  return (
    <section className="w-full min-h-screen bg-global-11 flex items-center justify-center py-16">
      <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <img 
              src={logoColor} 
              alt="Logo" 
              className="w-20 h-20 mx-auto mb-6" 
            />
            <h1 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-global-4 mb-3">
              Iniciar Sesión
            </h1>
            <p className="text-base md:text-lg text-global-5">
              Accede a tu cuenta para gestionar tus créditos
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm md:text-base font-medium text-global-4 mb-2">
                Correo electrónico
              </label>
              <EditText
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-medium text-global-4 mb-2">
                Contraseña
              </label>
              <EditText
                placeholder="Tu contraseña"
                value={formData.password}
                onChange={(value) => handleInputChange('password', value)}
                type="password"
                className="w-full"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span className="text-global-5">Recordarme</span>
              </label>
              <a href="#" className="text-global-10 hover:underline transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <Button 
              type="submit"
              variant="primary"
              size="large"
              fullWidth
              className="mt-8"
            >
              Iniciar Sesión
            </Button>
          </form>

          <div className="text-center mt-8">
            <p className="text-sm md:text-base text-global-5">
              ¿No tienes cuenta?{' '}
              <a href="/registro" className="text-global-10 font-medium hover:underline transition-colors">
                Regístrate aquí
              </a>
            </p>
          </div>

          <div className="text-center mt-6">
            <p className="text-xs md:text-sm text-global-7">
              O{' '}
              <a href="/dashboard" className="text-global-10 font-medium hover:underline transition-colors">
                ir directamente al dashboard
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}








