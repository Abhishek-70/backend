const mongoose = require('mongoose');

const dbName= "wss2000";
const url = `mongodb+srv://harsh69:Harsh6969@cluster0.t6unkg6.mongodb.net/${dbName}?retryWrites=true&w=majority`;


// Asynchronous Function - return  promise 
mongoose.connect(url)
.then((result) => {
    console.log('databse connected');
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;