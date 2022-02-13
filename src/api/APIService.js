export default class APIService {

    static submitForm(body) {
        return fetch(`http://127.0.0.1:5000/codingform`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    }

    static invalidateHistory() {
        return fetch(`http://127.0.0.1:5000/resethistory`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    }
}
