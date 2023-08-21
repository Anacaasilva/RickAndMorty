const api = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          reject({
            status: response.status,
            statusText: response.statusText
          });
        } else return response.json();
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};