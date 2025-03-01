var obj = 
{
    "name": "VENKATESH",
    "email": "venkatabc@gmail.com",
    "phone": "+91 1234543216",
    "work": "ABC pvt ltd",
    "position": "Engineer Trainee",
    "institution": "XYZ University",
    "area": "Tamil Nadu",
    "Course": "MERN",
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
