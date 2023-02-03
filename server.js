const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express()
app.use(cors())
app.use(express.static(path.resolve("./frontend/dist/frontend")));
const PORT = 8080;
app.get('/*', (req, res )=> {
    res.sendFile(path.resolve(process.cwd()+"/frontend/dist/frontend/index.html"));
});
app.get('/home', (req, res )=> {
    res.sendFile(path.resolve(process.cwd()+"/frontend/dist/frontend/index.html"));
});
app.listen(PORT, () => {
    console.log(`Server Running here  https://localhost:${PORT}`);
});