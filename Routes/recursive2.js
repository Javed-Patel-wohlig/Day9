const myModel = require("../Models/myModelSchema");
const myModel2 = require("../Models/myModel2Schema");
const _ = require("lodash");
const router = require("express").Router();

router.post('/',async (req,res)=>{
  try {
    var CHUNK = 200;
    const myModelData = await myModel.find()
    let bulk = _.chunk(myModelData, CHUNK);
    console.log(bulk.length)
    const recursiveInsert = async (start) => {

      if (myModelData.length === 0) {
        return;
      }

        const result = bulk.map((item) => {
        return {
          insertOne:{
            document:{
              name: item.name,
              email: item.email,
              phone: item.phone,
              address: item.address,
              dob: item.dob,
              password: item.password
            }
          }
        }
      });

      myModel2.bulkWrite(result);
      console.log(`Inserted ${myModelData.length} records`);
      await recursiveInsert(start + CHUNK);
    };

    await recursiveInsert(0);
    res.send("Bulk Write Success");

  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});


module.exports = router;