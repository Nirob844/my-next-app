import { Button } from "antd";
import Link from "next/link";

const ProductsPage = () => {
    return (
        <div>
            <h1>ProductsPage</h1>
            <Button type='primary'>
            <Link href='/'>home</Link>
          </Button>
        </div>
    );
};

export default ProductsPage; 