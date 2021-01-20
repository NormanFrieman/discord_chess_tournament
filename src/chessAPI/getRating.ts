import axios from "axios";

async function getRating(nickname: string): Promise<number>{
    const url = `https://api.chess.com/pub/player/${nickname}/stats`;
    
    try{
        const response = await axios.get(url);
        
        if(response.data.chess_rapid == undefined)
            return undefined;
        
        const rating = response.data.chess_rapid.last.rating;
        
        return rating;
    }catch(err){
        console.log(err);
        
        return undefined;
    }
}

export default getRating;