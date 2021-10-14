import HeadComponent from "../components/HeadContainer";
import ProductCard from "../components/ProductCard";

export default function Brands() {
    return (<>
        <HeadComponent />
        <div>
            <h1>BrandName</h1>
        </div>

        <div className="flex-col flex px-6 text-center ll  tablet:flex tablet:flex-wrap    tablet:flex-row  tablet:gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
   </> )
}

