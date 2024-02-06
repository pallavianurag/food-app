export const AddProduct = ({ onAddProduct }) => {
    return (
        <div className="flex justify-center">
            <button onClick={onAddProduct} className="bg-yellow-400 hover:bg-yellow-500 w-60 h-6 flex items-center justify-center text-sm"><span>Add +</span></button>
        </div>
    )
}