import { useContext } from "react";

import { GameContext } from "../../contexts/GameContext";
import CatalogItem from "./CatalogItem/CatalogItem";

const Catalog = () => {
    const { games } = useContext(GameContext);
    
    return (
        <section id="catalogPage">
        <h1>All Albums</h1>

            {games.length > 0
                ? games.map(x => <CatalogItem key={x._id} game={x} />)
                : <p>No Albums in Catalog!</p>
            }
        </section>
    );
};

export default Catalog;
