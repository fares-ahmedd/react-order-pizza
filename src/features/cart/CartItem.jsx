import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice, imageUrl, ingredients } = item;
  console.log(item);
  return (
    <li className="flex flex-wrap items-center justify-between gap-2 py-1 font-bold ">
      <div className="flex-1 ">
        <img src={imageUrl} alt={name} className="max-h-32 w-32" />
        <h1 className="text-base">
          {quantity}&times; {name}
        </h1>
        <p className="py-1 text-sm font-normal text-stone-600">
          {ingredients.join(" , ")}
        </p>
        <p className="w-fit font-extrabold shadow-sm shadow-black ">
          {formatCurrency(totalPrice)}
        </p>
      </div>
      <div className="flex flex-col-reverse gap-4">
        <DeleteItem pizzaId={pizzaId} />
        <UpdateItemQuantity pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
