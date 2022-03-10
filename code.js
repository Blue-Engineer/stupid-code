// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://ojolowo_1:ojaybee1@desccluster.ovxma.mongodb.net/clayring?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("clayring").collection("test");
//   // perform actions on the collection object
//   client.close();
// });

// const num = 15
// let binary = num.toString(2).length - 1

// for(binary; binary >= 0; binary--){
//   console.log('good')
// }

// function solution(A) {
//   for (i = 1; i < 1000000; i++) {
// if(!A.includes(i))  console.log(i);
// }

// }

// solution([1, 3, 6, 4, 1, 2])

function sums(nums) {
  var swap = function(i, j) {
      var tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
  };

  for (let i = 0; i < nums.length; i++) {
      while (0 < nums[i] && nums[i] - 1 < nums.length
              && nums[i] != i + 1
              && nums[i] != nums[nums[i] - 1]) {
          swap(i, nums[i] - 1);
      }
  }

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] != i + 1) {
          return i + 1;
      }
  }
  return nums.length + 1;
};

console.log(sums([1, 3, 6, 4, 1, 2]));