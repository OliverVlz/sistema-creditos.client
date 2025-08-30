import Button from '../ui/Button';
import logoColor from '../../assets/images/ui/logo-color.png';
import { useLocation, Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveSection = (sectionId: string) => {
    if (location.pathname === '/') {
      return sectionId === 'inicio';
    }
    return location.pathname.includes(sectionId);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Si no estamos en la página principal, navegamos primero
      navigate('/');
      // Después de navegar, esperamos un poco y luego hacemos scroll
      setTimeout(() => {
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si ya estamos en la página principal, solo hacemos scroll
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="w-full border-b border-slate-200 bg-global-11">
      <div className="mx-auto flex h-20 items-center justify-between max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoColor}
            alt="Logo"
            className="h-14 w-14 cursor-pointer"
          />
          <span className="sr-only">Sistema de Créditos</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={isActiveSection('inicio') ? 'nav-link-active' : 'nav-link-default'}
          >
            Inicio
          </Link>
          <Link
            to="/servicios"
            className={isActiveSection('servicios') ? 'nav-link-active' : 'nav-link-default'}
          >
            Servicios
          </Link>
          <Link
            to="/sobre-nosotros"
            className={isActiveSection('sobre-nosotros') ? 'nav-link-active' : 'nav-link-default'}
          >
            Sobre nosotros
          </Link>
          <button
            onClick={handleContactClick}
            className={`${isActiveSection('contacto') ? 'nav-link-active' : 'nav-link-default'} cursor-pointer`}
          >
            Contáctanos
          </button>

          <span className="h-5 w-px bg-global-3" aria-hidden="true" />

          <Link
            to="/registro"
            className="nav-link-register"
          >
            Regístrate
          </Link>

          <Link to="/login">
            <Button variant="primary" size="medium">
              Ingresar
            </Button>
          </Link>
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

