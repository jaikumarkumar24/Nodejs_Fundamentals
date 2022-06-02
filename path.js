import path from 'path'


const dir = path.basename('C:\\temp\\myfile.html');         //myfile.html
console.log(dir);

console.log(path.basename('/foo/bar/baz/asdf/quux.html')); //quux.html

console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html')); //quux


console.log(process.env.PATH);p


ath.dirname('/foo/bar/baz/asdf/quux');








