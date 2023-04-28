//Express is a library/dependency/module 
// Express is for node, just like what Bootstrap is for CSS
import express from 'express';

// Create an object 
const server = express();
server.use(express.json());
const port = 4400;

// Configure port no for the server
server.listen(port, function(){
    console.log('Server started and running on port no', port);
});


// Lets design the APIs

// Important tasks of Node Web Server
// It should be able to receive a REQUEST
// Process the request, query the database, get the result and package them
// Send the RESPONSE back in JSON format to the requestor

// API 1: receive greeeting request and send "hello" back in json. 
// req: Contains data sent to the node server
// res: Node uses to send data back
server.get('/greetings', function(req, res){
    res.json({ message: 'Hello Beautiful!!' })
});

server.get('/products', function(req, res){
    res.json([
        {
            id: 1,
            name: 'iPhone',
            price: 999
        },
        {
            id: 2,
            name: 'Samsung',
            price: 1199
        }
    ]);
})

server.get('/contact', function(req, res){
    // call the db.
    //process etc
    res.json([{
        id: 1,
        name: 'John',
        age: 20,
        address: '123 sdf sdf sdf '
    }])
})

server.post('/send', function(req, res){
    //console.log(req.body);
    res.json({ message: "received your message - " + req.body.greetings })
})
