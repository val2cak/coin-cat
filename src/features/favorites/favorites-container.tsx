import Layout from '../layout';
import FavoritesTable from './components/favorites-table';
import RecommendedCards from './components/recommended-cards';

const FavoritesContainer = () => {
  return (
    <Layout>
      <FavoritesTable />
      <RecommendedCards />
    </Layout>
  );
};

export default FavoritesContainer;
