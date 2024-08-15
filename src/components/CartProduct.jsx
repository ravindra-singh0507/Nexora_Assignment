import { MdOutlineDelete } from "react-icons/md";
import { useContext } from "react";
import { Context } from "./Context";

function CartProduct({ item }) {
    const {removeFromCart}=useContext(Context)
    return (
        <div className="flex space-x-4 justify-between py-6 px-2">
            <img src={item.image} alt="" className="w-[30%] object-contain h-[180px] " />
            <div className="w-[60%] flex flex-col justify-between">
                <h1 className="font-semibold text-xl">{item.title}</h1>
                <p>
                    {
                        item.description.length > 80 ?
                            (item.description.slice(0, 80) + '...') :
                            item.description
                    }
                </p>
                <div className="flex justify-between">
                    <div className="text-green-700 font-bold">
                        ${item.price}
                    </div>
                    <div>
                        <button className="h-[40px] w-[40px] rounded-full bg-red-200
                        hover:bg-red-300 flex justify-center items-center transition-all duration-200"
                        onClick={() => removeFromCart(item)}>
                        <MdOutlineDelete />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default CartProduct;