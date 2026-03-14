const https = require("https");
const fs = require("fs");
const app = require("./app");

const PORT = process.env.PORT || 3000;
require("dotenv").config();
const options = {
    key: fs.readFileSync(process.env.SSL_KEY),
    cert: fs.readFileSync(process.env.SSL_CERT)
};

https.createServer(options, app).listen(PORT, () => {
    console.log(`HTTPS Server running at https://localhost:${PORT}`);
});