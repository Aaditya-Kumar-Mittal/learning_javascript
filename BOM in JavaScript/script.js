
console.log(navigator);

navigator.geolocation.getCurrentPosition((d) => {
  console.log(d);
});


console.log(history);

console.log(location);
console.log(location.host);
console.log(location.hostname);
console.log(location.origin);
console.log(location.pathname);
console.log(location.port);
console.log(location.href);
console.log(location.protocol);

const reloadFun = () => location.reload();

const assignFun = () => location.assign("https://www.youtube.com");

const replaceFun = () => location.replace("https://www.youtube.com");