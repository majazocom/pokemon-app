const express = require('express');
const app = express();
const port = 3000;

// Define a route
// GET http://localhost:3000 

app.get('/', (req, res) => {
    //write the logic for this route
    //we have access to the request and the response

    //we want to return a 'hello world' to the user

    res.send('Hello World!');
});


//gotta add a listener :)))))))

app.listen(port, () => {
    console.log(`Pokemon app listening on port ${port}`)    
});
