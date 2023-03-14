const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_APIKEY}).base(process.env.AIRTABLE_BASEKEY);

const table = base('Coffee-Stores');

const getRecords = (records) =>{

    return(
        records.map(record => {
            return {
                ...record.fields,
            }
        })
        )
}

export { table , getRecords }