import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_HOST, API_KEY} from "../components/Constants/constants";

function useFetchGame(id) {
    const [game, setGame] = useState({});

    useEffect(() => {
        getGame(id)
    }, [])

    function getGame() {
        axios.get("/game", {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                'X-RapidAPI-Host': API_HOST,
                'X-RapidAPI-Key': API_KEY
            },
            params: {
                id,
            }
        }).then((response) => {
            if (response.data.status !== 0){
                setGame(response.data)
            }
        }).catch((error) => {
            setGame({})
            throw new Error(`Something is no yes! ${error}`)
        })
    }

    return {game};
}

export default useFetchGame;