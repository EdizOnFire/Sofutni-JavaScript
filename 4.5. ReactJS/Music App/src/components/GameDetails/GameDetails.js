import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { GameContext } from '../../contexts/GameContext';
import { useAuthContext } from '../../contexts/AuthContext';

import * as gameService from '../../services/gameService';

const GameDetails = () => {
    const navigate = useNavigate();
    const { fetchGameDetails, selectGame, gameRemove } = useContext(GameContext);
    const { user } = useAuthContext();
    const { gameId } = useParams();

    const currentGame = selectGame(gameId);

    const isOwner = currentGame._ownerId === user._id;

    useEffect(() => {
        (async () => {
            const gameDetails = await gameService.getOne(gameId);
            fetchGameDetails(gameId, { ...gameDetails, });
        })();
    }, [])

    const gameDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this game?');

        if (confirmation) {
            gameService.remove(gameId)
                .then(() => {
                    gameRemove(gameId);
                    navigate('/catalog');
                })
        }
    }

    return (
        <section id="detailsPage">
            <div className="wrapper">
                <div className="albumCover">
                    <img src={currentGame.imgUrl} />
                </div>

                <div className="albumInfo">
                    <div className="albumText">
                        <h1>Name: {currentGame.name}</h1>
                        <h3>Artist: {currentGame.artist}</h3>
                        <h4>Genre: {currentGame.genre}</h4>
                        <h4>Price: ${currentGame.price}</h4>
                        <h4>Date: {currentGame.releaseDate}</h4>
                        <p>Description: {currentGame.description}</p>
                    </div>
                </div>
                {isOwner &&
                    <div className="actionBtn">
                        <Link to={`/games/${gameId}/edit`} className="edit">Edit</Link>
                        <a onClick={gameDeleteHandler} className="remove">Delete</a>
                    </div>
                }
            </div>
        </section>
    );
};

export default GameDetails;
