import axios from 'axios';

const TaskRequest = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const url = `${apiUrl}/tasks`;

    const res = await axios
        .get(url)
        .then((response) => {
            console.log("Response body ", response);
            return response;
        });
    return res;
}

export default TaskRequest;