const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('primeira leva de dados');
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('leva de dados bloqueados');
  }, 4000);
});

promise1.then(data => {
  console.log(data);
});

promise2
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.warn(error);
  });

const promise = new Promise((res, rej) => {
  res(console.log('Ponto Inicial'));
})
  .then(() => {
    setTimeout(() => {
      console.log(1);
    }, 1000);
  })
  .then(() => {
    setTimeout(() => {
      console.log(2);
    }, 2000);
  })
  .then(() => {
    setTimeout(() => {
      console.log(3);
    }, 3000);
  })
  .then(() => {
    setTimeout(() => {
      console.log(4);
    }, 4000);
  })
  .then(() => {
    setTimeout(() => {
      console.log(5);
    }, 5000);
  })
  .then(() => {
    setTimeout(() => {
      console.log(6);
    }, 6000);
  })
  .then(() => {
    setTimeout(() => {
      console.log(7);
    }, 7000);
  })
  .then(() => {
    setTimeout(() => {
      console.log(8);
    }, 8000);
  })
  .then(() => {
    setTimeout(() => {
      console.log(9);
    }, 9000);
  })
  .then(() => {
    setTimeout(() => {
      console.log(10);
    }, 10000);
  })
  .then(() => {
    setTimeout(() => {
      console.log(11);
    }, 11000);
  })
  .then(() => {
    setTimeout(() => {
      console.log(12);
    }, 12000);
  });
