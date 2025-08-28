import { render, type RenderOptions } from '@testing-library/react';
import { type ReactElement } from 'react';
import { AppProviders } from '../src/providers/app-providers';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <AppProviders>{children}</AppProviders>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
