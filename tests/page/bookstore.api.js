import axios from 'axios';

export const BASE_URL = "https://bookstore.toolsqa.com/BookStore/v1";

class BookStoreApi {
    async addBook(data, token) {
        try {
            let response = await axios.post(BASE_URL + "/Books", data, {
                headers: {
                    "Accept": "json",
                    "Authorization": "Basic Y2hpYXJhOihRS3tuITU2UzxoXQ==",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            });
            return response;
        } catch (error) {
            return error;
        }
    }
    
    async deleteBook(data, token) {
        try {
            let response = await axios.delete(BASE_URL + "/Books?UserId=9b0d1491-9519-41c4-9f4e-f5859074096f", data, {
                headers: {
                    "Accept": "json",
                    "Authorization": "Basic Y2hpYXJhOihRS3tuITU2UzxoXQ==",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            });
            return response;
        } catch (error) {
            return error;
        }
    }
}

export default new BookStoreApi();