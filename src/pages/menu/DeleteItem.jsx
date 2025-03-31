import { useDispatch } from 'react-redux';
import { deleteItem } from '../cart/cartSlice.js';
import Button from '../../components/Button.jsx';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
