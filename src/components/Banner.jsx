//import Button from "./elements/Button";

export const Banner = () => {
    return (
        <div className="banner w-full md:w-3/4 px-7 mx-auto relative flex items-center-justify-between py-10">
            <div className="banner-deescription w-full md:w-1/2 p-3">
                <h1 className="mb-6 text-4xl font-bold text-white">
                    Food Ordering Made Easy!
                </h1>
                <p className="mb-6 text-md text-white"> We've streamlined the dining experience to make indulging in your favorite meals a breeze. Savor the simplicity – where satisfying your cravings has never been more convenient!</p>
                <a href="#restro" className="bg-yellow-500 hover:bg-yellow-600 w-60 h-10 flex items-center justify-center rounded-xl text-bold text-white">
                        See Menu
                    </a>
                {/* <p className="bg-red-400 hover:bg-red-500 w-60 h-6 flex items-center justify-center text-sm">
                    Get Started Today!
                </p> */}

            </div>
            {/* <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
            <div className="btn-container py-10">
                    <button>Order Now</button>

                </div>
                 <img src={require("../assets/images/pizza_banner.png")} alt="banner" className="max-h-95" /> 
            </div> */}
        </div>
    )
}