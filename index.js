var pdf = require("pdf-creator-node");
var fs = require("fs");

var html = fs.readFileSync("index.html", "utf8");

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm"
    },
    footer: {
        height: "28mm",
        contents: {
            first: '',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
        
        }
    }
};

var users = [
    {
      dateFrom: "18 JUL 2021",
      dateTo: "19 JUL 2021",
      city: "New york city",
      departureDate:"19 JUL 2021"
    },
 
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "",
  };

  pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });