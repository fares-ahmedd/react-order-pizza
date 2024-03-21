import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  console.log(fetcher.state);
  return (
    <fetcher.Form method="PATCH" className="text-right">
      {fetcher.state === "submitting" ? (
        <Button>Loading...</Button>
      ) : (
        <Button>Update PRIORITY</Button>
      )}
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  console.log(data);
  await updateOrder(params.orderId, data);
  return null;
}
