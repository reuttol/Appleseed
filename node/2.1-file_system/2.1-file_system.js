const fs = require('fs');

//* 1. Create a new txt file using the same fs module method we have learned before.
fs.writeFileSync("test.txt", "This is a test :)")

//* 2. Create a copy of the newly created txt fle using a method from the fs module.
fs.copyFileSync('test.txt', 'copyTest.txt');

//* 3. Rename one of the fles using a method from the fs module.
fs.renameSync('copyTest.txt', 'copy.txt');

//* 4. Get a list of all the fle names of the current directory using a method from the fs module.
fs.readdirSync('./').forEach(file => {
    console.log(file);
  });

//* 5. Find out and implement another method for the fs module.
fs.mkdirSync('./reut', { recursive: true });