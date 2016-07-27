// Let's build a server!
var express = require('express'),
  port = process.env.PORT || 8000,
  app = express();

//use determines what files we will initially serve
app.use(express.static('./'));

app.get('*', function(request, response) {
  //display that request
  console.log('New request:', request.url);
  response.sendFile('index.html', {root: '.'});
});

app.listen(port, function(){
  console.log('Server started on port ' + port + '!');
});
