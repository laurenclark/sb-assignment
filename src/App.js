import useFetch from "./hooks/useFetch";

function App() {
    const url = "https://fakestoreapi.com/products";
    const { response, error, isLoading } = useFetch(url);
    return (
        <div>
            {error && "error"}
            {isLoading && "Loading..."}
            {response &&
                response.map(({ id, title, description, image, category }) => (
                    <ul key={id}>
                        <li>
                            <img src={image} alt={description} />
                        </li>
                        <li>{title}</li>
                        <li>{description}</li>
                        <li>{category}</li>
                    </ul>
                ))}
        </div>
    );
}

export default App;
