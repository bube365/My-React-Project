const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("I've succeeded");
    }, 1000);
  } else {
    reject("failed");
  }
});

myPromise
  .then((value) => console.log(value))
  .catch((rejectValue) => console.log(rejectValue));
