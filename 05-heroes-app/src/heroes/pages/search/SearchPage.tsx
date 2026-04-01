import { SearchControls } from './ui/SearchControls';
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { searchHeroesAction } from '@/heroes/actions/search-heros.action';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';
  const strength = searchParams.get('strength') ?? '';

  const { data: heroes = [] } = useQuery({
    queryKey: ['search', { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5,
  });

  if (!heroes) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      <CustomBreadcrumbs
        currentPage="Buscador de héroes"
        // breadcrumbs={[
        //   { label: 'Home1', to: '/' },
        //   { label: 'Home2', to: '/' },
        //   { label: 'Home3', to: '/' },
        // ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />

      {/* Hero grid*/}
      {heroes.length === 0 ? (
        <div className="bg-white rounded-lg p-8 text-center shadow-sm border">
          <p className="text-gray-500 text-lg">
            No se encontraron resultados para "<strong>{name}</strong>"
          </p>
        </div>
      ) : (
        <HeroGrid heroes={heroes} />
      )}
    </>
  );
};
