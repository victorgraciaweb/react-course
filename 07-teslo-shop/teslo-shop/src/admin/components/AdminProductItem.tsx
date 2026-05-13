import { TableCell, TableRow } from '@/components/ui/table';
import type { Size } from '@/interfaces/product.interface';
import { currencyFormatter } from '@/lib/currency-formatter';
import { PencilIcon } from 'lucide-react';
import { Link } from 'react-router';

interface AdminProductItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes: Size[];
  stock: number;
}

export const AdminProductItem = ({
  id,
  name,
  price,
  image,
  category,
  sizes,
  stock,
}: AdminProductItemProps) => {
  return (
    <TableRow>
      <TableCell>
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-md"
        />
      </TableCell>
      <TableCell>
        <Link
          to={`/admin/products/${id}`}
          className="hover:text-blue-500 underline"
        >
          {name}
        </Link>
      </TableCell>
      <TableCell>{currencyFormatter(price)}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{stock} stock</TableCell>
      <TableCell>{sizes.join(', ')}</TableCell>
      <TableCell className="text-right">
        <Link to={`/admin/products/${id}`}>
          <PencilIcon className="w-4 h-4 text-blue-500" />
        </Link>
      </TableCell>
    </TableRow>
  );
};
