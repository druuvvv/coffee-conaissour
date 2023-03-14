import { table,getRecords } from "../../../lib/airtable";

const createCoffeeStore = async (req,res) => {
    const {id,name,address,neighbourhood,voting,imgUrl} = req.body;
    if(id){
        try{
        if(req.method === 'POST'){

        const findCoffeeStoreRecords = await table.select(
            {filterByFormula : `id=${id}`}
        ).firstPage()
    
        if(findCoffeeStoreRecords.length !== 0){
            const records = getRecords(findCoffeeStoreRecords)
            res.json(records);
        }
        else{
            if(id && name){
                const createRecord = await table.create([
                    {
                        "fields": {
                            id,
                            name,
                            address,
                            neighbourhood,
                            voting,
                            imgUrl
                        }
                    }
                ])
                const records = getRecords(createRecord);
                res.json({records})
            }
            else{
                res.status(400);
                res.json({
                    message:"Name missing"
                })
            }
        }}}
        catch(error){
            console.error({message: "Error creating or finding store" , error })
            res.status(500)
            res.json({message: "Error creating or finding store" , error })
        }}
            else{
                res.status(400);
                res.json({
                    message:"Gimme ID mf"
                })
            }
}
    


export default createCoffeeStore;