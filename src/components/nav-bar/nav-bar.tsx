import Links from './components/links';
import Logo from './components/logo';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between sm:px-8 lg:px-16 px-40 py-6 border-b border-b-light border-opacity-5'>
      <Logo />
      <Links />
    </div>
  );
};

export default NavBar;
