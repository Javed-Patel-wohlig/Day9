const conn = require('./Config/config');
const myModel = require('./Models/myModelSchema');  

const data = [];
for (let i = 0; i < 3000; i++) {
  const name = `user${i + 1}`;
  const email = `user${i + 1}@example.com`;
  const obj = {
    name: name,
    phone: 9137761883,
    email: email,
    dob: "29-07-2000",
    password: "1012154And26151",
    address: "dsouza building, sakinaka, mumbai-400072"
  };
  data.push(obj);
}

myModel.insertMany(data, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

console.log(data);
