"use client";
import { useSelector } from "react-redux";
import { StoreProduct, stateProps } from "../../../type";

const CartPage = () => {
  const { productData } = useSelector((state: stateProps) => state.next);
  return (
    <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
      {productData.length > 0 ? (
        <>
          <div className="bg-white col-span-4 p-4 rounded-lg">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1 ">
              <p className="text-2xl font-semibold text-amazon_blue">
                Shopping Cart
              </p>
              <p className="text-lg font-semibold text-amazon_blue">subtitle</p>
            </div>
          </div>
          <div>
            {productData.map((item: StoreProduct) => {
              <div key={item._id}>
                <p>{item.brand}</p>
              </div>;
            })}
          </div>
        </>
      ) : (
        <div>
          <h1>your Cart is Empty</h1>
          <button>go to shopping</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
