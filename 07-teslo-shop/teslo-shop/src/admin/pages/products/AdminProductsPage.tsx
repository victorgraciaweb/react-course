import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router';
import { AdminTitle } from '@/admin/components/AdminTitle';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/shop/hooks/useProducts';
import { AdminProductsList } from '@/admin/components/AdminProductsList';

export const AdminProductsPage = () => {
  const { data } = useProducts();

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Productos"
          subTitle="Aquí puedes ver y administrar tus productos"
        />

        <div className="flex justify-end mb-10 gap-4">
          <Link to="/admin/products/new">
            <Button>
              <PlusIcon />
              Nuevo producto
            </Button>
          </Link>
        </div>
      </div>

      <AdminProductsList products={data?.products || []} />

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};
