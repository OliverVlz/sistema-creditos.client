import Button from '../ui/Button';
import logoColor from '../../assets/images/ui/logo-color.png';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActiveSection = (sectionId: string) => {
    if (location.pathname === '/' || location.pathname === '/home') {
      return location.hash === `#${sectionId}` || (sectionId === 'inicio' && !location.hash);
    }
    return location.pathname.includes(sectionId);
  };

  return (
    <header className="w-full border-b border-slate-200 bg-global-11">
      <div className="mx-auto flex h-20 items-center justify-between max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src={logoColor}
            alt="Logo"
            className="h-14 w-14"
          />
          <span className="sr-only">Sistema de Créditos</span>
        </div>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          <a 
            className={isActiveSection('inicio') ? 'nav-link-active' : 'nav-link-default'} 
            href="#inicio"
          >
            Inicio
          </a>
          <a 
            className={isActiveSection('servicios') ? 'nav-link-active' : 'nav-link-default'} 
            href="#servicios"
          >
            Servicios
          </a>
          <a
            className={isActiveSection('about') ? 'nav-link-active' : 'nav-link-default'}
            href="/about"
          >
            Sobre nosotros
          </a>
          <a 
            className={isActiveSection('contacto') ? 'nav-link-active' : 'nav-link-default'} 
            href="#contacto"
          >
            Contáctanos
          </a>

          <span className="h-5 w-px bg-global-3" aria-hidden="true" />
          
          <a 
            className="nav-link-register" 
            href="#registro"
          >
            Regístrate
          </a>

          <Button variant="primary" size="medium">
            Ingresar
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors" aria-label="Abrir menú">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

