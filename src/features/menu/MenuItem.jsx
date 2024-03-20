import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCart, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
      imageUrl,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li className="flex flex-col rounded border border-stone-400">
      <div className="image">
        <img
          src={imageUrl}
          alt={name}
          className={`w-full rounded rounded-b-none ${soldOut ? "opacity-70 grayscale" : ""}`}
        />
      </div>
      <div className="flex flex-1 flex-col bg-yellow-400 p-2 text-stone-800">
        <div className="flex items-center justify-between border-b border-yellow-600 pb-2">
          <p className="font-bold ">{name}</p>{" "}
          {!soldOut && <UpdateItemQuantity pizzaId={id} />}
        </div>
        <p>{ingredients.join(", ")}</p>
        <div className="my-auto flex items-center justify-between gap-1 font-semibold">
          {!soldOut ? (
            <p className="grow-[1]">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="uppercase text-red-600 ">Sold out</p>
          )}
          {isInCart && <DeleteItem pizzaId={id} />}
          {!soldOut && !isInCart && (
            <Button
              custom={
                "bg-blue-500 text-white hover:bg-blue-400 sm:px-2 md:px-2 p-2 rounded grow-[2]	 "
              }
              onClick={handleAddToCart}
            >
              order
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
