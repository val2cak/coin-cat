import { useRoutes } from 'react-router-dom';
import { Routes } from './routes/Routes';
import './styles/globals.css';

const App = () => {
  const prepareRoutes = useRoutes(Routes);

  return <div>{prepareRoutes}</div>;
};

export default App;
