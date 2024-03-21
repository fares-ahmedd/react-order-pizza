import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const isSubmitting = useNavigation().state === "submitting";
  const {
    userName,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";
  const dispatch = useDispatch();
  const [widthPriority, setWidthPriority] = useState(false);
  // const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = widthPriority ? 20 : 0;
  const totalPrice = totalCartPrice + (priorityPrice * totalCartPrice) / 100;
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="m-auto flex h-[100%] w-[80%] flex-1 flex-col items-center justify-center ">
      <h2 className="mb-4 text-xl font-bold sm:text-4xl">
        Ready to order? Let's go!
      </h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST" className="flex w-full flex-col gap-2">
        <div>
          <label className="block">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input"
            defaultValue={userName}
          />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input
              type="tel"
              name="phone"
              required
              className={`input ${formErrors?.phone ? "border-red-600" : ""}`}
            />{" "}
            {formErrors?.phone && (
              <span style={{ color: "red", fontSize: "16px" }}>
                {formErrors.phone}
              </span>
            )}
          </div>
        </div>

        <div>
          <label>Address</label>
          <div className="relative">
            <input
              type="text"
              name="address"
              required
              className={`input ${addressStatus === "error" ? "border-red-600" : ""}`}
              disabled={isLoadingAddress}
              defaultValue={address}
            />
            {addressStatus === "error" && (
              <span style={{ color: "red", fontSize: "16px" }}>
                {errorAddress}
              </span>
            )}

            {!position.latitude && (
              <button
                disabled={isLoadingAddress}
                className="absolute right-5 top-2 text-blue-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get position
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-row-reverse gap-x-3 ">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 "
            value={widthPriority}
            onChange={(e) => setWidthPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-bold">
            Want to yo give your order priority?
          </label>
        </div>

        <div className="text-end">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude
                ? `latitude:${position.latitude},longitude:${position.longitude}`
                : ""
            }
          />
          <Button disabled={isSubmitting}>
            {isSubmitting
              ? "placing order"
              : `Order now ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  console.log(order);
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      "please give us your correct phone number. we might need it to contact you";
  }
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  // todo: shouldn't use in real project because it will decrease the performance
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
