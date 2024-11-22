import { handleCartClick, handleUserClick } from '../utils/helpers';
import { FaRegTimesCircle, FaUser, FaShoppingBasket } from 'react-icons/fa';

const menuTabs = [
  {
    icon: FaShoppingBasket,
    text: 'cart',
    onClick: handleCartClick,
  },
  {
    icon: FaUser,
    text: 'user',
    onClick: handleUserClick,
  },
  {
    icon: FaRegTimesCircle,
    text: 'menu',
    onClick: null,
  },
];

export default menuTabs;
