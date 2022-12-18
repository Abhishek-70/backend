//importing express
const express = require( 'express');
const userRouter = require('./routers/userRouter');
const issueRouter = require('./routers/issueRouter');
const cors = require('cors');
// initializing express server
const app = express();

const port = 5000;

// middleware
app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}))
app.use('/user',userRouter);
app.use('/issue',issueRouter);

//  route or end point
app.get('/', (req,res) => {
    res.send('respons from express')
})

app.get('/home',(req,res) => {
    res.send('response from home')
})
// starting server

app.listen(port,() => {
    console.log('server started')
})