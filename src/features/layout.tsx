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

      <div className='flex-1 sm:px-8 lg:px-16 px-40 flex flex-col sm:gap-16 gap-24 sm:pb-16 pb-24'>
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
