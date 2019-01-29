const express = require('express');

let app = express();

app.use ((request, response, next) => {
  request.user={name:'Dragan'};
  next();
});

app.get ('/hello', (request, response) =>{
response.send(`Hello ${request.user.name}` );
});
app.listen(3000);

  console.log ('The server is running on port: 3000 ');
