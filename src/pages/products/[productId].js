import { useRouter } from "next/router";

const ProductDetailsPage= () => {
    const router = useRouter()
    return (
        <div>
            <h1>Product Details dynamic page: {router.query.productId}</h1>
        </div>
    );
};

export default ProductDetailsPage;