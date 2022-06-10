// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  function superbowlWin(record){
      const result=record.find((record)=>record.result==="W")
      if (result){
          return result.year;

      }
  }
  
// function superbowlWin(Array){
//     const record = [
//         { year: "2015", result: "W"},
//         { year: "2014", result: "N/A"},
//         { year: "2013", result: "L"},
//         //...
//       ]
//       for(const record of Array){
//           if(record.result==="win"){
//               console.log(record.year);
//           }
//       }

// }

    


    


