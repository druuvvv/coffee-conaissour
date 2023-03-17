const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_APIKEY}).base(process.env.AIRTABLE_BASEKEY);

const table = base('Coffee-Stores');

const getRecords = (records) =>{

    return(
        records.map(record => {
            return {
                recordId : record.id,
                ...record.fields,
                }
        })
        )
}

const getCoffeeStoreRecords = async (fsq_id) =>{
    const findCoffeeStoreRecords = await table.select(
        {filterByFormula : `fsq_id="${fsq_id}"`}
    ).firstPage()

    const records = getRecords(findCoffeeStoreRecords)
    return (records);
}
export { table , getRecords , getCoffeeStoreRecords }