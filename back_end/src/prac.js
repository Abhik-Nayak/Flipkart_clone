const bcrypt = require('bcrypt');

// const saltRounds = 10;
const passwordRounds = "Admin@123";
// const hash_password =bcrypt.hashSync(passwordRounds, saltRounds);
// console.log(hash_password)
const test=bcrypt.compareSync("Admin@123", "$2b$10$9VNGG01fF0TjFgQIeC8SnuGKOxAahdLFpji/yDsvFnb7QkSmnmscq");
console.log(test);