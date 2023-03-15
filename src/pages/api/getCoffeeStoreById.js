import { getCoffeeStoreRecords } from "../../../lib/airtable";

const getCoffeeStoreById = async (req,res) => {

    const {fsq_id} = req.query;
    if(fsq_id){
    try{
       const records = await getCoffeeStoreRecords(fsq_id)
        if(records.length !== 0){
            res.json(records);
        }
        else{
        res.json({message : `id could not be found`})
        }
    }
    catch(error){
        res.status(500)
        res.json({message : "Something went wrong :("})
    }}
    else{
        res.status(400);
        res.json({message : "Gimme ID mf"})
    }
}

export default getCoffeeStoreById;