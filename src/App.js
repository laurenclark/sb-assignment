import useFetch from "./hooks/useFetch";

import styled from "styled-components";

import Header from "./components/Header";
import ProductPage from "./layouts/ProductPage";
import ProductControls from "./components/ProductControls";
import Product from "./components/Product";

export default function App() {
    const productsUrl = "https://fakestoreapi.com/products";
    const { response, error, isLoading } = useFetch(productsUrl);

    const ErrorMessage = styled.div`
        color: tomato;
        font-weight: bold;
        text-align: center;
        display: grid;
        place-items: center;
        height: 40vh;
    `;

    return (
        <ProductPage>
            <Header />
            <ProductControls />
            <main>
                {error && (
                    <ErrorMessage>
                        Sorry, something went wrong. Please refresh the page and
                        try again.
                    </ErrorMessage>
                )}
                {isLoading && "Loading..."}
                <ul>
                    {!error &&
                        response?.map(
                            ({ id, title, description, image, category }) => (
                                <Product
                                    key={id}
                                    title={title}
                                    description={description}
                                    image={image}
                                    category={category}
                                />
                            )
                        )}
                </ul>
            </main>
        </ProductPage>
    );
}
