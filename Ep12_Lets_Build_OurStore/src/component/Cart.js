import ResMenuList from "./ResMenuList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="mx-10">
      <div className="flex justify-between border-b-2 border-dashed my-[25px] pb-[25px] sm:mx-[10%] md:mx-[15%] ">
        <div className="text-2xl font-bold text-gray-600 py-2">Cart</div>
        <button
          className="font-medium pb-1 border inline mt-1 px-3 py-2 h-10 shadow-sm border-slate-300 hover:border-indigo-500 rounded-md hover:shadow-sm ml-3 "
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
      <div className="border-b-[15px] border-gray-200 my-[20px] sm:mx-[10%] md:mx-[15%] ">
        {cartItems.map((item) => (
          <ResMenuList key={item?.card?.info?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
