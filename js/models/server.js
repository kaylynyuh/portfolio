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

var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();

var proxyGitHub = function(request, response) {
  console.log('Routing GH request for', request.params[0]);
  (
    requestProxt({
      url: 'http://api.github.com' + request.params[0],
      headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
    })
  )(request, response);
};


app.get('/github/*', proxyGitHub);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
