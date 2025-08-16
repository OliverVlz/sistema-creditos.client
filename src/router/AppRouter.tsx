import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../shell/Layout'
import Dashboard from '../features/dashboard/pages/Dashboard'
import ClientsPage from '../features/clients/pages/ClientsPage'
import SimulationPage from '../features/simulation/pages/SimulationPage'

export default function AppRouter() {
  return (
    <Routes>
      {/* Rutas públicas como /login vendrán después; por ahora todo bajo Layout */}
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Módulo Créditos */}
        <Route path="/simulation" element={<SimulationPage />} />
        <Route path="/my-loans" element={<div>Mis Solicitudes</div>} />

        {/* Módulo Gestión */}
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/loans" element={<div>Solicitudes de Préstamo</div>} />
        <Route path="/approvals" element={<div>Aprobaciones</div>} />

        {/* Módulo Administración */}
        <Route path="/interest-rates" element={<div>Tasas de Interés</div>} />
        <Route path="/settings" element={<div>Configuración</div>} />
        <Route path="/reports" element={<div>Reportes</div>} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
