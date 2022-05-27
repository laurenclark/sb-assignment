import { css } from "styled-components/macro";
import { ThreeDots } from "react-loading-icons";

const LoaderStyles = css`
    height: 35vh;
    display: grid;
    place-items: center;
    h3 {
        color: grey;
        font-size: 40px;
    }
`;

export default function Loader() {
    return (
        <div css={LoaderStyles}>
            <ThreeDots
                fill="#666"
                fillOpacity={1}
                height="4em"
                speed={1}
                stroke="transparent"
                strokeOpacity={1}
                style={{
                    margin: "0 auto"
                }}
            />
            <h3>Loading...</h3>
        </div>
    );
}
