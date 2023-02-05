import { createApi } from "unsplash-js";

const unsplashApi = createApi({
    accessKey : process.env.UNSPLSH_ACCESSKEY,
})

const getcoffeestoresimage = async () => {

    const photojson = await unsplashApi.search.getPhotos({
        query : "coffee",
        perPage: 10,
    }) 
    return photojson.response.results.map((result) => result.urls["small"]);
}

export const getcoffeestores = async () => {
    

    
    const response = await fetch('https://api.foursquare.com/v3/places/search?query=coffee%20store&ll=23.347789158106185%2C85.32648638053675&limit=9', {
        headers: {
            'Authorization': process.env.FOURSQUARE_APIKEY,
            'accept': 'application/json'
        }
    })  
    const data = await response.json();
    const photos = await getcoffeestoresimage();
    console.log(photos);
      return data.results.map((result ,idx) =>{
        return{
        ...result,
        imgUrl: photos[idx]
}});

}
