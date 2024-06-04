
export const getGifs = async ( category: string ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Vk7nFfeiFEEUg4eIfWFyAW4WT1S599wh&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
    }));
 
 
    return gifs;
  };