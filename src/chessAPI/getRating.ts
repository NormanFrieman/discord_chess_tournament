import axios from "axios";

async function getRating(nickname: string): Promise<number>{
    const url = `https://api.chess.com/pub/player/${nickname}/stats`;
    
    try{
        const response = await axios.get(url);
        const rating = response.data.chess_daily.last.rating;
        
        return rating;
    }catch(err){
        console.log(err);
        
        return undefined;
    }
}

export default getRating;