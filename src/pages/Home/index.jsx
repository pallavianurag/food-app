import { About } from "../../components/About";
import { Banner } from "../../components/Banner";
import { ProductsPreview } from "../../components/ProductsPreview";
import { Footer } from "../../components/Footer";
import { RestroName } from "../../components/RestroName";
export default function Home()  {
    return(
        <>
        <div className="bg-img">
        <Banner/>
        <ProductsPreview/>
        </div>
        <About/>
        <RestroName/>
        <div className="py-10"></div>
        </>
    )
}