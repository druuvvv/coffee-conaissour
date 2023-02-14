import { createApi } from "unsplash-js";

const unsplashApi = createApi({
    accessKey : process.env.NEXT_PUBLIC_UNSPLSH_ACCESSKEY,
})

const getfetchurl = async (query,latlong,limit) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latlong}&limit=${limit}`
}

const getcoffeestoresimage = async () => {

    const photojson = await unsplashApi.search.getPhotos({
        query : "coffee shops",
        perPage: 40,
    }) 
    return photojson.response.results.map((result) => result.urls["small"]);
}

export const getcoffeestores = async (query , latlong , limit) => {
    const response = await fetch(await getfetchurl(query,latlong,limit), {
        headers: {
            'Authorization': process.env.NEXT_PUBLIC_FOURSQUARE_APIKEY,
            'accept': 'application/json'
        }
    })  
    const data = await response.json();
    const photos = await getcoffeestoresimage();

      return data.results.map((result ,idx) =>{
        return{
        ...result,
        imgUrl: photos[idx]
}});

}
