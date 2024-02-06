import { AddProduct } from "./AddProduct";

export const ProductPreviewCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        <div className="w-full p-4 px-10 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center">
            <img src={product.imageUrl} alt={product.name} width={700} />
            <h2 className="pb-2 py-1 text-lg">{product.name}</h2>
            <p className="mb-2 h-20 line-clamp-4">{product.desciption}</p>
            <div className="py-3"><AddProduct onAddProduct={addProduct} /> </div>

        </div>
    )
}