import fetch from 'isomorphic-fetch';
import statusHandle from '../utils/statusHandle';

export default function getJWTToken(url, data) {
    return fetch(`${url + 'authenticate/'}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify({
            username: data.username,
            password: data.password,
        }),
    })
    .then(statusHandle)
    .then(response => response.json())
    .then(tokenString => tokenString)
    .catch(error => Promise.reject(error));
}
