import { Routes, Route, Navigate } from 'react-router-dom'
import LandingLayout from '../components/layout/LandingLayout'
import Layout from '../components/layout/Layout'
import HomePage from '../modules/landing/pages/HomePage'
import CreditPoliciePage from '../modules/landing/pages/CreditPoliciePage'
import ServicesPage from '../modules/landing/pages/ServicesPage'
import AboutPage from '../modules/landing/pages/AboutPage'
import RegisterPage from '../modules/landing/pages/RegisterPage'
import LoginPage from '../modules/landing/pages/LoginPage'
import EjercitoNacionalPage from '../modules/landing/pages/EjercitoNacionalPage'
import ArmadaNacionalPage from '../modules/landing/pages/ArmadaNacionalPage'
import FuerzaAeroespacialPage from '../modules/landing/pages/FuerzaAeroespacialPage'
import PoliciaNacionalPage from '../modules/landing/pages/PoliciaNacionalPage'
import Dashboard from '../modules/dashboard/pages/Dashboard'
import ClientsPage from '../modules/clients/pages/ClientsPage'
import SimulationPage from '../modules/simulation/pages/SimulationPage'
import { PublicRoute } from './components/PublicRoute'
import { PrivateRoute } from './components/PrivateRoute'
import {
  LANDING_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  ABOUT_ROUTE,
  SERVICES_ROUTE,
  CREDIT_POLICIES_ROUTE,
  EJERCITO_NACIONAL_ROUTE,
  ARMADA_NACIONAL_ROUTE,
  FUERZA_AERESPACIAL_ROUTE,
  POLICIA_NACIONAL_ROUTE,
  DASHBOARD_ROUTE
} from './routes'

export default function AppRouter() {
  return (
    <Routes>
      {/* ===== RUTAS PÚBLICAS (Landing Pages) ===== */}
      <Route element={
        <PublicRoute>
          <LandingLayout />
        </PublicRoute>
      }>
        <Route index element={<HomePage />} />
        <Route path="/inicio" element={<Navigate to="/" replace />} />
        <Route path={SERVICES_ROUTE} element={<ServicesPage />} />
        <Route path={ABOUT_ROUTE} element={<AboutPage />} />
        <Route path={CREDIT_POLICIES_ROUTE} element={<CreditPoliciePage />} />
        <Route path={EJERCITO_NACIONAL_ROUTE} element={<EjercitoNacionalPage />} />
        <Route path={ARMADA_NACIONAL_ROUTE} element={<ArmadaNacionalPage />} />
        <Route path={FUERZA_AERESPACIAL_ROUTE} element={<FuerzaAeroespacialPage />} />
        <Route path={POLICIA_NACIONAL_ROUTE} element={<PoliciaNacionalPage />} />
      </Route>

      {/* ===== RUTAS DE AUTENTICACIÓN (TEMPORALMENTE DESHABILITADAS) ===== */}
      {/* 
      <Route path={REGISTER_ROUTE} element={
        <PublicRoute redirectIfAuthenticated={true}>
          <LandingLayout />
        </PublicRoute>
      }>
        <Route index element={<RegisterPage />} />
      </Route>

      <Route path={LOGIN_ROUTE} element={
        <PublicRoute redirectIfAuthenticated={true}>
          <LandingLayout />
        </PublicRoute>
      }>
        <Route index element={<LoginPage />} />
      </Route>
      */}

      {/* Rutas temporales sin autenticación */}
      <Route path={REGISTER_ROUTE} element={<LandingLayout />}>
        <Route index element={<RegisterPage />} />
      </Route>

      <Route path={LOGIN_ROUTE} element={<LandingLayout />}>
        <Route index element={<LoginPage />} />
      </Route>

      {/* ===== RUTAS PRIVADAS (Dashboard) - SIN AUTENTICACIÓN TEMPORAL ===== */}
      <Route path={DASHBOARD_ROUTE} element={
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      }>
        <Route index element={<Dashboard />} />
        
        {/* Módulo Créditos */}
        <Route path="simulation" element={<SimulationPage />} />
        <Route path="my-loans" element={<div>Mis Solicitudes</div>} />

        {/* Módulo Gestión */}
        <Route path="clients" element={<ClientsPage />} />
        <Route path="loans" element={<div>Solicitudes de Préstamo</div>} />
        <Route path="approvals" element={<div>Aprobaciones</div>} />

        {/* Módulo Administración */}
        <Route path="interest-rates" element={<div>Tasas de Interés</div>} />
        <Route path="settings" element={<div>Configuración</div>} />
        <Route path="reports" element={<div>Reportes</div>} />
      </Route>

      {/* Redirect para rutas no encontradas */}
      <Route path="*" element={<Navigate to={LANDING_ROUTE} replace />} />
    </Routes>
  )
}
