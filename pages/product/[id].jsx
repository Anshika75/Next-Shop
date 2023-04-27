import { useRouter } from "next/router";
function SingleProduct() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <h1>Single Product: {id}</h1>
        </div>
    );
}

export default SingleProduct