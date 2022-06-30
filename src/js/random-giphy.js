export default class RandomGiphy {
  static getRandom(category, number) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=cVhpPNreTmpvCNqaoxK7PXB9c3dsXHKl&q=${category}&offset=${number}`;
    console.log(url);
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