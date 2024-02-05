var obj = 
{
    "name": "VENKATESH",
    "email": "venkateshpk06@gmail.com",
    "phone": "+91 9080942372",
    "work": "INOX Airproducts pvt ltd",
    "position": "Engineer Trainee",
    "institution": "BPT college",
    "area": "Kanchipuram",
    "Course": "Diploma",
    "Percentage": "77%",
}

  
for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var val = obj[key];
      console.log(key+" : "+val);
    }
  }

  for(var key of Object.keys(obj)){
    console.log(`values:${obj[key]}`)
  }
  Object.values(obj).forEach((ele)=>console.log(ele))
