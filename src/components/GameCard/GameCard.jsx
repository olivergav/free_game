import React from 'react';
import {Link} from "react-router-dom";

function GameCard({developer, freetogame_profile_url, game_url, genre, id, platform, publisher, release_date, short_description, thumbnail, title}) {
    return (
        <Link to={`/games/${id}`} style={{textDecoration: 'none', color: 'black'}}>
            <div style={{border: '1px solid black', margin: '10px', padding: '10px', maxWidth: '300px', borderRadius: '4px'}}>
                <img src={`${thumbnail}`} alt={`${title}`} style={{width: '100%'}}/>
                <h2>{title}</h2>
                <p>Genre: {genre}</p>
                <p>Description: {short_description}</p>
            </div>
        </Link>
    );
}

export default GameCard;