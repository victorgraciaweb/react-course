import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomJumbotron } from '../../components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';
import { products } from '@/mocks/products.mock';
import { useProducts } from '@/shop/hooks/useProducts';

export const HomePage = () => {
  const { data } = useProducts();

  console.log(data);
  return (
    <>
      <CustomJumbotron title={'Todos los productos'} />

      <ProductsGrid products={products} />

      <CustomPagination totalPages={7} />
    </>
  );
};
