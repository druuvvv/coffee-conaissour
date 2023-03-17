import { table } from "../../../lib/airtable";
import { getCoffeeStoreRecords } from "../../../lib/airtable";

const upvoteCoffeeStoreById = async (req,res) => {

if(req.method === 'PUT'){
    const {fsq_id} = req.body;
    console.log({fsq_id});
    if(fsq_id){
    try{
    const records =await getCoffeeStoreRecords(fsq_id);
    if(records.length !== 0){
        const record = records[0];
        const upvote = parseInt(record.voting) + parseInt(1);
        console.log(222)
        const updateRecord = await table.update([
            {
                id : record.recordId,
                fields : {
                    voting : upvote,
                }
            }
        ])

        if(updateRecord){
            res.json({updateRecord})
        }
        else{
            res.json({message : "Something went wrong"});
        }
    }
    else{
    }
    }catch(error){
        console.error("Something went wrong bozo" , error)
    }
    }else{
        res.json({message : "Gimme ID mf"})
    }
}


}

export default upvoteCoffeeStoreById;