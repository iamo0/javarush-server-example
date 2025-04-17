let lastCall = Date.now();

setInterval(() => {
  const now = Date.now();
  console.log(lastCall - now);
  lastCall = now;
}, 1000);
