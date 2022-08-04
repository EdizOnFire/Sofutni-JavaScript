import { Link } from 'react-router-dom';

const CatalogItem = ({ game }) => {
    return (
        <div className="card-box">
            <img src={game.imgUrl} />
            <div>
                <div className="text-center">
                    <p className="name">Name: {game.name}</p>
                    <p className="artist">Artist: {game.artist}</p>
                    <p className="genre">Genre: {game.genre}</p>
                    <p className="price">Price: ${game.price}</p>
                    <p className="date">Release Date: {game.releaseDate}</p>
                </div>
                <div className="btn-group">
                    <Link to={`/catalog/${game._id}`} id="details">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CatalogItem;
