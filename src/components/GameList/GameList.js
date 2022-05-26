import React, {useState} from 'react';
import useFetch from "../../hooks/useFetch";
import GameCard from "../GameCard/GameCard";

function GameList() {
    const [filter, setFilter] = useState({
        platform: 'browser',
        sortBy: 'relevance',
    });

    const {games} = useFetch(filter);

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {games.map(({developer, freetogame_profile_url, game_url, genre, id, platform, publisher, release_date, short_description, thumbnail, title}) =>
                <GameCard key={id} developer={developer} freetogame_profile_url={freetogame_profile_url} game_url={game_url} genre={genre} platform={platform} publisher={publisher} release_date={release_date} short_description={short_description} thumbnail={thumbnail} title={title}/>)}
        </div>
    );
}

export default GameList;