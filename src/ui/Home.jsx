import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="text-center mb-10 px-4 ">
      <h1 className="  font-black  text-stone-700 my-2 text-xl sm:text-4xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
