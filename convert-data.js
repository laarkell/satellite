(async () => {

  const csvFilePath = './data.csv';
  const csv = require('csvtojson');

  const jsonArray = await csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
  });

})();
