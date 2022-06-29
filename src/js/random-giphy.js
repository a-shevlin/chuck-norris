export default class RandomGiphy {
  static getRandom() {
    let url = `https://api.giphy.com/v1/gifs/random?api_key=cVhpPNreTmpvCNqaoxK7PXB9c3dsXHKl`;
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