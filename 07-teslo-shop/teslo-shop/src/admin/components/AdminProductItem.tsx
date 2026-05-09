import { TableCell, TableRow } from '@/components/ui/table';
import type { Size } from '@/interfaces/product.interface';
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
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-md"
        />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{stock}</TableCell>
      <TableCell>{sizes.join(', ')}</TableCell>
      <TableCell className="text-right">
        {/* <Link to={`t-shirt-teslo`}>Editar</Link> */}
        <Link to={`/admin/products/t-shirt-teslo`}>Editar</Link>
      </TableCell>
    </TableRow>
  );
};
