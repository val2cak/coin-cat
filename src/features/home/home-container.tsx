import Layout from '../layout';
import Header from './components/header';
import MarketTable from './components/market-table';
import TrendingCards from './components/trending-cards';

const HomeContainer = () => {
  return (
    <Layout>
      <Header />
      <TrendingCards />
      <MarketTable />
    </Layout>
  );
};

export default HomeContainer;
