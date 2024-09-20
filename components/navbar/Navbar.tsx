import Container from '../global/Container';
import CartButton from './CartButton';
import Links from './Links';
import Logo from './Logo';
import NavSearch from './NavSearch';
import ThemeButton from './ThemeButton';

const Navbar = () => {
  return (
    <nav className='border-b'>
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 flex-wrap py-8'>
        <Logo />
        <NavSearch />
        <div className='flex gap-4 items-center'>
          <CartButton />
          <ThemeButton />
          <Links />
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;