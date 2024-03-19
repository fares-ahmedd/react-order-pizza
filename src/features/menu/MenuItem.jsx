import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className=" flex flex-col rounded border border-stone-400">
      <div className="image">
        <img
          src={imageUrl}
          alt={name}
          className={`w-full rounded rounded-b-none ${soldOut ? "opacity-70 grayscale" : ""}`}
        />
      </div>
      <div className="flex flex-1 flex-col bg-yellow-400 p-2 text-stone-800">
        <p className="border-b border-yellow-600 font-bold">{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div className="my-auto flex items-center justify-between gap-1 font-semibold">
          {!soldOut ? (
            <p className="grow-[1]">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className=" uppercase text-red-600">Sold out</p>
          )}
          {!soldOut && (
            <Button
              custom={
                "bg-blue-500 text-white hover:bg-blue-400 sm:px-2 md:px-2 p-2 rounded grow-[2]	 "
              }
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
