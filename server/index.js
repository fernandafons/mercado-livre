const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ 
    author: {
      name: "Iphone",
      lastname: "Top",
    },
    categories:["Blablabla", "String", "String2"],
    items:[
      {
      id:'String',
      title:'String',
      price:{
        currency:'String',
        amount: 2,
        decimals:"Number"
      },
      picture:'String',
      condition:'String',
      free_shipping:true
      },
    ]
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});