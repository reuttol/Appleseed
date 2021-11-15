setInterval(() => {
    let date = new Date();
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(time);
  }, 1000);