import { FC, ReactNode } from 'react';

import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer/footer';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <NavBar />

      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
