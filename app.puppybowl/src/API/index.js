const API = "https://fsa-puppy-bowl.herokuapp.com/api/2401-FTB-ET-WEB-AM";

export async function fetchAllPlayers () {
    try {
        const response = await fetch (`${API}/players`);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error("Cannot fetch all players", error);
    }
}
