const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/webpush";

mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(db => {
	console.log('DB is conected')
}).catch(err => {
	console.log('Error: ', err)
});

module.exports = mongoose;