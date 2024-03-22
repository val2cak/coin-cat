import { useRoutes } from 'react-router-dom';
import { Routes } from './routes/Routes';

const App = () => {
  const prepareRoutes = useRoutes(Routes);

  return <div className='h-screen'>{prepareRoutes}</div>;
};

export default App;
