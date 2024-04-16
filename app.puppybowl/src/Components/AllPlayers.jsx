import { useState, useEffect } from 'react';
import { fetchAllPlayers } from '../API';

export default function AllPlayers () {
    const [players, setPlayers] = useState([]);
    console.log(players);
useEffect(() => {
    async function getAllPlayers() {
        try {
        const response = await fetchAllPlayers();
        console.log(response.data.players); 
        setPlayers(response.data.players);   
        } catch (error) {
            console.log(error);
        }
    }
    getAllPlayers();
}, []);  

return (
    <>
    <h1>PUPPY BOWL</h1>
    </>
)

}

