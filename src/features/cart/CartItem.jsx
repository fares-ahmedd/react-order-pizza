import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-1 font-bold ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between ">
        <p className=" font-extrabold shadow-sm shadow-black	">
          {formatCurrency(totalPrice)}
        </p>
        <Button custom={"bg-red-600 text-[#eee] hover:bg-red-800"}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
