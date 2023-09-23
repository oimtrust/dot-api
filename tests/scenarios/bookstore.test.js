import {getToken} from '../helper/generate-token';
import BookStoreApi from '../page/bookstore.api';
import * as data from '../data/book.data';
import { USER } from '../data/user.data';

describe('Book Stores Test', () => {
    let token;
    before(async() => {
        token = await getToken(USER);
    });

    it('Successfully added book', () => {
        let response;
        browser.call(() => {
            return BookStoreApi.addBook(data, token)
                .then(data => response = data)
                .catch(error => console.log(error));

            expect(response.status).toEqual(201)
        })
    });
    
    it('Successfully deleted book', () => {
        let response;
        browser.call(() => {
            return BookStoreApi.addBook(data, token)
                .then(data => response = data)
                .catch(error => console.log(error));

            expect(response.status).toEqual(204)
        })
    });
});