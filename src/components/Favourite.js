import { useState } from "react";
import styled from "styled-components";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const FavouriteHeart = styled.span`
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 20px;
    cursor: pointer;
`;

export default function Favourite() {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <FavouriteHeart onClick={() => setIsToggled(!isToggled)}>
            {isToggled ? <IoIosHeart /> : <IoIosHeartEmpty />}
        </FavouriteHeart>
    );
}
