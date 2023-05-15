import { useRouter } from "next/router";
import { getProductById } from "@/firebase/products";
import { useEffect, useState } from "react";
import { MapContainer } from "@/libs/GoogleApi";
function SingleProduct() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProductById(id);
            setProduct(product);
        }
        if (id) fetchProduct();
    }, [id])
    return (
        <div>
            {
                product ? (
                    <div>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <p>{product.category}</p>
                        <p>{product.by?.displayName}</p>
                    </div>
                    ):"No Product Found"
            }
            <MapContainer lat={product?.location?.lat} lon={product?.location?.lon} />
        </div>
    )
}

export default SingleProduct