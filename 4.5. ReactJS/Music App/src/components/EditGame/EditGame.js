import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as gameService from '../../services/gameService';
import { GameContext } from "../../contexts/GameContext";

const EditGame = () => {
    const [currentGame, setCurrentGame] = useState({});
    const { gameEdit } = useContext(GameContext);
    const { gameId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        gameService.getOne(gameId)
            .then(gameData => {
                setCurrentGame(gameData);
            })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.target));

        gameService.edit(gameId, gameData)
            .then(result => {
                gameEdit(gameId, result);
                navigate(`/catalog/${gameId}`)
            });
    };

    return (
        <section id="editPage">
            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend>Edit Album</legend>
                    <div className="container">
                            <label htmlFor="name" className="vhide">Album name</label>
                            <input id="name" name="name" className="name" type="text" defaultValue={currentGame.name} />

                            <label htmlFor="imgUrl" className="vhide">Image Url</label>
                            <input id="imgUrl" name="imgUrl" className="imgUrl" type="text" defaultValue={currentGame.imgUrl} />

                            <label htmlFor="price" className="vhide"> Price</label>
                            <input id="price" name="price" className="price" type="text" defaultValue={currentGame.price} />

                            <label htmlFor="releaseDate" className="vhide">Release date</label>
                            <input id="releaseDate" name="releaseDate" className="releaseDate" type="text" defaultValue={currentGame.releaseDate} />

                            <label htmlFor="artist" className="vhide">Artist</label>
                            <input id="artist" name="artist" className="artist" type="text" defaultValue={currentGame.artist} />

                            <label htmlFor="genre" className="vhide">Genre</label>
                            <input id="genre" name="genre" className="genre" type="text" defaultValue={currentGame.genre} />

                            <label htmlFor="description" className="vhide">Description</label>
                            <textarea name="description" className="description" rows={10} cols={10} defaultValue={currentGame.description} />

                            <button className="edit-album" type="submit" >Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default EditGame;
