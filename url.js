import url from 'url';


const myNewURL =
  new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');


  const newURL =
  url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL.href);

//new URL(input[, base])

const myURLc = new URL('/foo', 'https://example.org/');
const myURLv = new URL({ toString: () => 'https://example.org/' });

//console.log(myURLc,myURLv);
console.log(URL === url.URL); // Prints 'true'.

const myURLz = new URL('https://測試');

console.log(myURLz);