import { useEffect } from "react";
import ProductDetailCard from "../../components/ProductDetailCard";
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../stores/menu/productsSlice";
import { addToCart } from "../../stores/cart/cartSlice";
import { useParams } from "react-router-dom";
export const Restro = () => {

    const {id} = useParams()

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