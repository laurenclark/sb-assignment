import useFetch from "./hooks/useFetch";
import styled from "styled-components";
import Header from "./components/Header";
import ProductPage from "./layouts/ProductPage";
import ProductControls from "./components/ProductControls";
import Product from "./components/Product";

const ProductList = styled.ul`
    max-width: 100%;
    width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    list-style: none;
`;

function App() {
    const url = "https://fakestoreapi.com/products";
    const { response, error, isLoading } = useFetch(url);

    return (
        <ProductPage>
            <Header />
            <ProductControls />
            <main>
                {error && "error"}
                {isLoading && "Loading..."}
                <ProductList>
                    {response?.map(
                        ({ id, title, description, image, category }) => (
                            <Product
                                id={id}
                                title={title}
                                description={description}
                                image={image}
                                category={category}
                            />
                        )
                    )}
                </ProductList>
            </main>
        </ProductPage>
    );
}

export default App;
