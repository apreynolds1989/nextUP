// fetch data
export const fetchData = async (url) => {
    try{
        const response = await fetch(url).then((response) => response.json());
        return response;
    } catch (err) {
        alert(`The following Error has occurred: ${err}. Currently displaying static data to show table functionality.`)
        return null;
    }

}