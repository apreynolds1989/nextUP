// fetch data
export const fetchData = async (url) => {
    const response = await fetch(url).then((response) => response.json());
    return response;
}