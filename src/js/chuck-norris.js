//business logic
export default class Norris {
    static getRandom() {
        return fetch('http://api.chucknorris.io/jokes/random')
          .then(function(response) {
            if(!response.ok) {
                throw Error(responsse.statusText);
            }
            return response.json();
          })
          .catch(function(error) {
            return error;
          })
    }
}