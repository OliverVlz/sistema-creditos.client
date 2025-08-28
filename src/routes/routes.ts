// Rutas públicas
export const LANDING_ROUTE = '/';
export const LOGIN_ROUTE = '/login';
export const REGISTER_ROUTE = '/register';
export const ABOUT_ROUTE = '/about';
export const SERVICES_ROUTE = '/services';
export const CREDIT_POLICIES_ROUTE = '/credit-policies';

// Rutas privadas
export const DASHBOARD_ROUTE = '/dashboard';
export const SIMULATION_ROUTE = '/simulation';
export const CLIENTS_ROUTE = '/clients';

// Rutas de clientes
export const CLIENTS_ROUTES = {
  ROOT: CLIENTS_ROUTE,
  LIST: `${CLIENTS_ROUTE}/list`,
  CREATE: `${CLIENTS_ROUTE}/create`,
  EDIT: (id: string) => `${CLIENTS_ROUTE}/${id}/edit`,
  DETAILS: (id: string) => `${CLIENTS_ROUTE}/${id}`,
} as const;
