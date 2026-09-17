import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
  AllCommunityModule,
  ModuleRegistry,
  colorSchemeDarkWarm,
  colorSchemeLightWarm,
  themeQuartz,
  type ColDef,
} from 'ag-grid-community';
import type { Product, RemoteProps } from '../types';
import '../index.css';

ModuleRegistry.registerModules([AllCommunityModule]);

const lightTheme = themeQuartz.withPart(colorSchemeLightWarm).withParams({ fontFamily: 'inherit' });
const darkTheme = themeQuartz.withPart(colorSchemeDarkWarm).withParams({ fontFamily: 'inherit' });

const columnDefs: ColDef<Product>[] = [
  { field: 'title', headerName: 'Product', flex: 2, minWidth: 180, filter: true },
  { field: 'category', flex: 1, minWidth: 130, filter: true },
  { field: 'brand', flex: 1, minWidth: 120 },
  { field: 'price', flex: 1, minWidth: 100, valueFormatter: (p) => `$${Number(p.value).toFixed(2)}` },
  { field: 'rating', flex: 1, minWidth: 90 },
  { field: 'stock', flex: 1, minWidth: 90 },
];

export default function ProductTable({ data, theme }: RemoteProps) {
  const gridTheme = useMemo(() => (theme === 'dark' ? darkTheme : lightTheme), [theme]);

  return (
    <div className="rm-flex rm-flex-col rm-gap-3">
      <p className={`rm-m-0 rm-text-sm ${theme === 'dark' ? 'rm-text-stone-300' : 'rm-text-stone-600'}`}>
        Showing {data.products.length} of {data.total} products
      </p>
      <AgGridReact<Product>
        theme={gridTheme}
        rowData={data.products}
        columnDefs={columnDefs}
        domLayout="autoHeight"
        pagination
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 30]}
      />
    </div>
  );
}
