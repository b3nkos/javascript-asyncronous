const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (urlApi) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', urlApi, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        xhr.status === 200
          ? resolve(JSON.parse(xhr.responseText))
          : reject(new Error('Error', urlApi));
      }
    }
    xhr.send();
  });
}

module.exports = fetchData;