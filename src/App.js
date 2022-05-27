import useFetch from "./hooks/useFetch";

import styled from "styled-components";
import { css } from "styled-components/macro";

import Header from "./components/Header";
import ProductPage from "./layouts/ProductPage";
import ProductControls from "./components/ProductControls";
import Product from "./components/Product";
import Loader from "./components/Loader";

export default function App() {
    const productsUrl = "https://fakestoreapi.com/products";
    const limit = "20";
    const { response, error, isLoading } = useFetch(
        `${productsUrl}?limit=${limit}`
    );

    const ErrorMessage = styled.div`
        color: tomato;
        font-weight: bold;
        text-align: center;
        display: grid;
        place-items: center;
        height: 40vh;
    `;

    const errorState = (
        <ErrorMessage>
            Sorry, something went wrong. Please refresh the page and try again.
        </ErrorMessage>
    );

    return (
        <ProductPage>
            <Header />
            <ProductControls
                resultsPerPage={limit}
                maxResults={String(response?.length)}
            />
            <main>
                {error && errorState}
                {isLoading && <Loader />}
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
            <span
                css={css`
                    margin: 20px;
                    display: block;
                    text-align: center;
                    color: grey;
                    font-size: 30px;
                `}>
                <a href="https://github.com/laurenclark/sb-assignment">Repo</a>
            </span>
        </ProductPage>
    );
}
