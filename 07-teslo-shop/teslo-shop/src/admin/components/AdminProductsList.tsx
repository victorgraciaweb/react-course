import type { Product } from '@/interfaces/product.interface';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from '@/components/ui/table';
import { AdminProductItem } from './AdminProductItem';

interface Props {
  products: Product[];
}

export const AdminProductsList = ({ products }: Props) => {
  return (
    <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
      <TableHeader>
        <TableRow>
          <TableHead>Imagen</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Precio</TableHead>
          <TableHead>Categoría</TableHead>
          <TableHead>Inventario</TableHead>
          <TableHead>Tallas</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <AdminProductItem
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            image={product.images[0]}
            category={product.gender}
            sizes={product.sizes}
            stock={product.stock}
          />
        ))}
      </TableBody>
    </Table>
  );
};
