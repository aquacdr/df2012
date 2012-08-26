var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 30000;

app.listen(port, function(){
  console.log("Express server listening on port %d", app.address().port);

});

// gets all stories
app.get('/va/stories', function(req, res){
	var story = new Object();
	story.Id = "1234";
	story.name = "Add a js method for story";
	story.devLoe = "4"
	var storyJSON = JSON.stringify(story);

	response.send('test');

});