const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Welcome to the ContactKeeper API' }));

// setup routes: have some endpoints our app can hit to do certain things
// like register user, login, add contact etc... 

// deine our routes
app.use('/api/users', require('./routes/users')); //whenever someone hits that api, it is gonna look at the require file address
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));