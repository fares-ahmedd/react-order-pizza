import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";
import DeleteItem from "./DeleteItem";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <li className="flex flex-wrap items-center justify-between gap-2 py-1 font-bold ">
      <div className="flex-1 ">
        <img src={imageUrl} alt={name} className="max-h-32 w-32" />
        <h1 className="text-base">
          {quantity}&times; {name}
        </h1>
        <p className="w-fit font-extrabold shadow-sm shadow-black ">
          {formatCurrency(totalPrice)}
        </p>
      </div>
      <DeleteItem pizzaId={pizzaId} />
    </li>
  );
}

export default CartItem;
