import React from 'react';
import {Link, useParams} from "react-router-dom";
import useFetchGame from "../../hooks/useFetchGame";

function GameDetails() {
    const {id} = useParams();
    const {game: {developer, freetogame_profile_url, game_url, genre, gameId, platform, publisher, release_date, short_description, thumbnail, title, status, description, screenshots}} = useFetchGame(id);


    return (
        <div style={{maxWidth: '600px', width: '100%', margin: '20px auto', padding: '10px'}}>
            <Link to="/" style={{textDecoration: 'none', background: 'blue', color: 'white', fontWeight: 'bold', padding: '15px 30px', borderRadius: '15px', margin: '5px', textTransform: 'uppercase'}}>HomePage</Link>
            <a href={`${freetogame_profile_url}`} style={{textDecoration: 'none', color: 'black'}} target="_blank" rel="noreferrer">
                <h1>
                    {title}{" "}
                    <span style={{fontSize: '10px', }}>
                        {status}
                    </span>
                </h1>
            </a>
            <p>{platform}</p>
            <p>
                Publisher: <b>{publisher}</b>,
                Release date: <b>{release_date}</b>
            </p>
            <p>{description}</p>
            {screenshots && (
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {screenshots.map(({id, image}) => (
                        <img style={{maxWidth: '280px', width: '100%', padding: '0 10px 10px 0'}} key={id} src={`${image}`} alt={`${image.split('/')[image.split('/').length - 1].split('.')[0]}`}/>
                    ))}
                </div>
            )}
        </div>
    );
}

export default GameDetails;