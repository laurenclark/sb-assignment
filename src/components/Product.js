import { ProductItem, ProductImage, ProductDescription } from "./ProductStyles";
import Favourite from "./Favourite";

export default function Product({ title, description, image, category }) {
    return (
        <ProductItem>
            <ProductImage src={image} alt={description} />
            <ProductDescription>
                <h4>
                    <strong>{title}</strong>
                    <Favourite />
                </h4>
                <p>{description}</p>
            </ProductDescription>
            <p>{category[0].toUpperCase() + category.slice(1)}</p>
        </ProductItem>
    );
}
