import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomJumbotron } from '../../components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';
import { products } from '@/mocks/products.mock';

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title={'Todos los productos'} />

      <ProductsGrid products={products} />

      <CustomPagination totalPages={7} />
    </>
  );
};
