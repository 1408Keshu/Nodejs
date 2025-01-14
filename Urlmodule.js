const myURL = new URL('https://example.org:8000')
myURL.pathname='a/b/c';
myURL.search='?d=e';
myURL.hash ='#fgh';
// myURL.port ='8000';
myURL.password='1231';
myURL.username='keshav';
console.log(myURL);
console.log(myURL.href);