import AccountIcon from "../icons/AccountIcon";
import CartButton from "./CartButton";
import Search from "./Search";

function Header() {
  return (
    <header className="border-b border-gray-200 py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          LWS.SHOP
        </a>
        <NavLinks />
        <div className="flex items-center space-x-4">
          <Search />

          <CartButton />
          <AccountIcon />
        </div>
      </div>
    </header>
  );
}
export default Header;

function NavLinks() {
  return (
    <nav className="hidden md:flex space-x-6">
      <a href="#" className="hover:text-gray-500 transition-colors">
        Shop
      </a>
      <a href="#" className="hover:text-gray-500 transition-colors">
        On Sale
      </a>
      <a href="#" className="hover:text-gray-500 transition-colors">
        New Arrivals
      </a>
      <a href="#" className="hover:text-gray-500 transition-colors">
        Brands
      </a>
    </nav>
  );
}
