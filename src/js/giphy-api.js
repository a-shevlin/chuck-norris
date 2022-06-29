export default class NorrisGiphy {
  static getRandom(number) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=cVhpPNreTmpvCNqaoxK7PXB9c3dsXHKl&q=chuck norris&offset=${number}`;
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