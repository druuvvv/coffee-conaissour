import { table,getRecords,getCoffeeStoreRecords } from "../../../lib/airtable";

const createCoffeeStore = async (req,res) => {
    const {fsq_id,name,address,neighbourhood,voting,imgUrl} = req.body;
    if(fsq_id){
        try{
        if(req.method === 'POST'){

            const records = await getCoffeeStoreRecords(fsq_id);
    
        if(records.length !== 0){
            res.json(records);
        }
        else{
           
        }}}
        catch(error){
            console.error({message: "Error updateing coffeestore" , error })
            res.status(500)
            res.json({message: "Error updateing coffeestore" , error })
        }}
            else{
                res.status(400);
                res.json({
                    message:"Gimme ID mf"
                })
            }
}
    


export default createCoffeeStore;