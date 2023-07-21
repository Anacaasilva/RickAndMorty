const api = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(resolve => resolve.json())
      .then(val => resolve(val))
      .catch(err => reject(err))
  })
}