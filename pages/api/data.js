// import * as fs from 'node:fs';
import fs from 'node:fs'
// import test from './data/test.json' assert { type: 'JSON' };
// export default function handler(req, res) {
//     // let data1;
//     // fs.readdir('../../data',utf-8, (err, data) => {
//     //     if (err) throw err;
//     //     data1 = data
//     //   });
//     res.status(200).json({name:'hello world'})
//   }
  
export default function handler(req, res) {
  // let data ;
  //   fs.readFileSync('./data/test.json','utf-8',(err,data)=>{
  //   if(err){console.log(err)}
  //   data=data;
  // })
  res.status(200).json({
    "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
    ]
    })
}