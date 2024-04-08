import { useCallback, useState } from "react";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({restaurant}) => {
    
    if (!restaurant) {
        return null;
    }

    const { name, menu, reviews } = restaurant;

    return (
        <div>
            <h1>{name}</h1>
            <div>
                <h3>Menu:</h3>
                <Menu menu={menu} />
            </div>
            <div>
                <h3>Reviews:</h3>
                <Reviews reviews={reviews} />
            </div>
        </div>
    )
}