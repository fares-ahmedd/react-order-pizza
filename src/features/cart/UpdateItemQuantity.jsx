import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  const isInCart = currentQuantity > 0;

  return (
    <div className="flex items-center gap-1">
      <button
        className={`rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 disabled:bg-gray-500 `}
        title={`${!isInCart ? "press on order button to decrease" : ""}`}
        disabled={!isInCart}
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </button>
      <span>{currentQuantity}</span>
      <button
        className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 disabled:bg-gray-500"
        title={`${!isInCart ? "press on order button to increase" : ""}`}
        disabled={!isInCart}
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
