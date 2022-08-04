import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import * as gameService from "../../services/gameService";

const CreateGame = () => {
    const { gameAdd } = useContext(GameContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.target));

        gameService.create(gameData).then((result) => {
            gameAdd(result);
        });
    };

    return (
        <section className="createPage">
            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend>Add Album</legend>
                    <div className="container">
                        <>
                            <label htmlFor="name" className="vhide">
                                Album name
                            </label>
                            <input
                                id="name"
                                name="name"
                                className="name"
                                type="text"
                                placeholder="Album name"
                            />
                            <label htmlFor="imgUrl" className="vhide">
                                Image Url
                            </label>
                            <input
                                id="imgUrl"
                                name="imgUrl"
                                className="imgUrl"
                                type="text"
                                placeholder="Image Url"
                            />
                            <label htmlFor="price" className="vhide">
                                Price
                            </label>
                            <input
                                id="price"
                                name="price"
                                className="price"
                                type="text"
                                placeholder="Price"
                            />
                            <label htmlFor="releaseDate" className="vhide">
                                Release date
                            </label>
                            <input
                                id="releaseDate"
                                name="releaseDate"
                                className="releaseDate"
                                type="text"
                                placeholder="Release date"
                            />
                            <label htmlFor="artist" className="vhide">
                                Artist
                            </label>
                            <input
                                id="artist"
                                name="artist"
                                className="artist"
                                type="text"
                                placeholder="Artist"
                            />
                            <label htmlFor="genre" className="vhide">
                                Genre
                            </label>
                            <input
                                id="genre"
                                name="genre"
                                className="genre"
                                type="text"
                                placeholder="Genre"
                            />
                            <label htmlFor="description" className="vhide">
                                Description
                            </label>
                            <textarea
                                name="description"
                                className="description"
                                placeholder="Description"
                                defaultValue={""}
                            />
                            <button className="add-album" type="submit">
                                Add New Album
                            </button>
                        </>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default CreateGame;
