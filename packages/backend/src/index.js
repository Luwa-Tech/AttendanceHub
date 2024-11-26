import express from 'express';

const server = express();
const PORT = process.env.PORT;

server.use('/', (req, res) => {
    res.send('Hello, world');
})

server.listen(PORT, () => {
    console.log('Please wait..');
    console.log(`Server is listening on PORT: ${PORT}`);
})