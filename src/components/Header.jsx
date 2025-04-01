import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartQuantity } from '../pages/cart/cartSlice';

function Header() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/">TastyTrek</Link>

      {/* <SearchOrder /> */}

      <Link to="/cart">{totalCartQuantity} pizzas | 🛒</Link>
    </header>
  );
}

export default Header;
