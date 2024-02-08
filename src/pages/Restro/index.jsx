import { useEffect } from "react";
import ProductDetailCard from "../../components/ProductDetailCard";
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../stores/menu/productsSlice";
import { addToCart } from "../../stores/cart/cartSlice";
import { useParams } from "react-router-dom";
export const Restro = () => {

    const {name} = useParams()

    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);

    const onAddProduct = (product) => {
        dispatch(addToCart(product))
    }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

   
    return(
        <div>
                       <div className="py-4 flex items-center justify-center">
                         <h1 className="mb-4 text-xl py-10 font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">{name}</h1>
                       </div>  
                        {
                    products.products && products.products[0].products.map((product, index) => {
                        return (
                           <ProductDetailCard key={index} product={product} onAddProduct={onAddProduct}/>
                        )
                    })
                }
        </div>
    )
}