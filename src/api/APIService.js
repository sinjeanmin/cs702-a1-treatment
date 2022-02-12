export default class APIService {
  // Insert an article

  static submitForm(body) {
      console.log(body)
    return fetch(`http://127.0.0.1:5000/codingform`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => console.log(response.json()))
      .catch((error) => console.log(error));
  }
}
