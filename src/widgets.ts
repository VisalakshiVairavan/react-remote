import type { ComponentType } from 'react';
import CategoryPie from './components/CategoryPie';
import type { RemoteProps } from './types';

export type { Product, ProductsResponse, RemoteProps, Theme } from './types';

export interface WidgetDefinition {
  id: string;
  title: string;
  description: string;
  component: ComponentType<RemoteProps>;
}

export const widgets: WidgetDefinition[] = [
  {
    id: 'categories',
    title: 'Categories',
    description: 'How the menu splits across categories',
    component: CategoryPie,
  },
];
