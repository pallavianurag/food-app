import { Tabs } from "../../components/Tabs";

import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/cartSlice";
import useTabSwitch from "../../hooks/useTabSwitch";
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";

import { ProductsSummary } from "../../components/ProductsSummary";

const Cart = () => {
    const cart = useSelector(cartProducts);
    const tabs= ['Summary', 'Confirmation'];
    const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');

    const checkAuthToken = () => {
        const token = sessionStorage.getItem('Auth token');
        if (token) {
            return true;
        } else {
            return false;
        }
    }     
    if( !checkAuthToken()){
        return (
            <div className="bg-white h-full text-black flex justify-center p-4">
                <h1>Log In to add orders in your Cart!</h1>
            </div>
        )
    }
    if (!cart || cart.length === 0) {
        return (
            <div className="bg-white h-full text-black flex justify-center p-4">
                <h1>Your Cart is empty</h1>
            </div>
        )
    }
    return (
        <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
            <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
            <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
                <ProductsSummary />
                <div className="flex justify-end p-2">
                    <button className="flex items-center" onClick={()=>handleTabSwitch('Confirmation')}><span className="mr-1">Next</span><ArrowRightSvg /></button>
                </div>
            </div>
            <div className={`tabs ${currentTab !== 'Confirmation' ? 'hidden' : ''}`}>
                
                <div className="flex justify-center p-2">
                    <h1>Order Placed!</h1>
                </div>
            </div>
        </div>
    )
}


export default Cart;