import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from '../common/Footer';

export default function LandingLayout() {
  return (
    <div className="min-h-screen w-full bg-global-11">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

