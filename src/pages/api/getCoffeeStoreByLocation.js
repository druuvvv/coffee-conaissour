import { getcoffeestores } from "../../../lib/coffee-store";

const getCoffeeStoreByLocation = async (req , res) =>{
try{
    const { latlong , limit } = req.query;
    const response = await getcoffeestores('cafes' , latlong , limit);
    res.status(200);
    res.json(response);

}
catch(err){
    console.error("lol");
}


}

export default getCoffeeStoreByLocation;