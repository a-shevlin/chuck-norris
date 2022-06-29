//business logic
export default class Norris {
  static getRandom(category) {
    let url = `https://api.chucknorris.io/jokes/random?category=${category}`
    return fetch(url)
      .then(function(response) {
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
      })
      .catch(function(error) {
      return error;
      });
  }
}