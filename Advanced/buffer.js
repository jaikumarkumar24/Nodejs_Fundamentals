const buf = Buffer.from('Hey!');
console.log(buf[0]); // H - 72 ( UTF-8 bytes )
console.log(buf[1]); // e - 101
console.log(buf[2]); // y - 121

const buff = Buffer.alloc(1024);

console.log(buf.toString());
console.log(buf.length);

for (const item of buf) {
    console.log(item); // 72 101 121 33
  }