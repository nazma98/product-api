import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useProducts from '../hooks/useProducts';

const columns = [
  { field: 'sl', headerName: 'SL', width: 90 },
  {
    field: 'name',
    headerName: 'Product name',
    width: 150,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 150,
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 110,
  },
  {
    field: 'image',
    headerName: 'Image',
    type: 'number',
    width: 110,
  },
];

export function ProductTable() {
const { formattedRows } = useProducts();
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid rows={formattedRows} columns={columns} disableRowSelectionOnClick />
    </Box>
  );
}
