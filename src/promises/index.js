const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Hey we do it!');
    } else {
      reject('something was wrong :(');
    }
  });
}

const somethingWillHappenTwo = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      setTimeout(() => {
        resolve('True');
      }, 2000);
    } else {
      const error = new Error('something was wrong :(');
      reject(error);
    }
  });
}

somethingWillHappen()
.then(response => console.log(response))
.catch(error => console.error(error));

somethingWillHappenTwo()
.then(response => console.log(response))
.catch(error => console.log(error))

Promise.all([somethingWillHappen(), somethingWillHappenTwo()])
.then(response => {
  console.log('Array of results', response)
})
.catch(err => {
  console.error(err);
})