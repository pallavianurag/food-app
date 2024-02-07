import { useDispatch, useSelector } from "react-redux";
import { fetchProducts,selectAllProducts } from "../stores/menu/productsSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const RestroName = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);


    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return(<div>
         <h1 className="text-4xl font-bold text-center">Our Top Restaurants</h1>
         <br></br>
        <div className="bg-black text-white text-center py-5">
           
            {products.products.map((product) =><div className="bg-yellow-600 hover:bg-yellow-700 text-lg font-medium p-3"><Link to= {`/restro/${product.name.name}`}>{product.name.name} </Link></div>)}
        </div>
        </div>
    )
}