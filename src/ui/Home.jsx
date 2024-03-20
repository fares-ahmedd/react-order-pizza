import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="mb-10 mt-[70px] px-4 text-center ">
      <h1 className="my-2 mb-8 text-xl font-black text-stone-700 sm:text-4xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button to={"/menu"}>continue ordering, {userName}</Button>
      )}
    </div>
  );
}

export default Home;
