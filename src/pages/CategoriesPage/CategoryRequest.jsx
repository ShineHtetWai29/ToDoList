import axios from 'axios';

export const CategoryRequest = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const url = `${apiUrl}/categories`;

    const res = await axios
        .get(url)
        .then((response) => {
            console.log("Response body ", response);
            return response;
        });
    return res;
}