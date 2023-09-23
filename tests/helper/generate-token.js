import axios from 'axios';

const AUTH_URL = "https://bookstore.toolsqa.com/Account/v1";

export const getToken = async (data) => {
    try {
        const response = await axios.post(AUTH_URL + "/GenerateToken", data, {
            headers: {
                "Accept": "json",
                "Authorization": "Basic Y2hpYXJhOihRS3tuITU2UzxoXQ==",
                "Content-Type": "application/json"
            }
        });
        return response.data.token;
    } catch (error) {
        return error;
    } 
}