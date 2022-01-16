const express = require('express');
const dotenv  = require('dotenv');

//loading env variables
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json( success = false, msg = `Show all bootcamps`);
});
app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json( success = false, msg = `Show bootcamp ${req.params.id}`);
});
app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json( success = false, msg = 'Create new bootcamp');
});
app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json( success = false, msg = `Update bootcamp ${req.params.id}`);
});
app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json( success = false,msg = `Delete bootcamp ${req.params.id}`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));
 