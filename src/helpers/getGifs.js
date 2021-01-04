export const getGifs = async (categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=6&api_key=8xM8glGI28CuFcTurkewTMFxnSKwHyry`

    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map( img =>{
        return {
             id: img.id
            ,title: img.title
            ,url: img.images.fixed_height.url
        }
    })

    return gifs;
}