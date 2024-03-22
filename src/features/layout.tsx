import { FC, ReactNode } from 'react';

import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer/footer';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='min-h-screen m-0 w-full flex flex-col'>
      <NavBar />

      <div className='flex-1 px-40 py-8'>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
