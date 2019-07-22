function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        f2(x).then(v => {
            console.log('3');
            resolve(x);
        })
    });
  }

  async function f2() {
    return f3(10);
  }
  function f3(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('1');
        resolve(x);
      }, 2000);
    });
  }
  async function f1() {
    for (var i = 0; i < 2; i++) {
        var x = await resolveAfter2Seconds(10);
        console.log(i, 'i', x);
    }
    console.log(x, 'x'); // 10
  }
  f1();