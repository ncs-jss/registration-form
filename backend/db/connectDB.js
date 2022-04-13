const mongoose = require('mongoose');

mongoose.connect("mongodb://admin:H4c3N65@host.docker.internal:27018", {
	      dbName: "chatbot",
	      useNewUrlParser: true,
	      useUnifiedTopology: true,
	      useFindAndModify: false
	    })
    .then(() => {
	          console.log('Mongodb connected....');
	        })
    .catch(err => console.log(err.message));

