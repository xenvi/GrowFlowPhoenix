const app = require("express")();
const axios = require("axios");
const { apiKey, apiUser } = require("./apiObject");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/employee", (req, res) => {
    axios.get(`https://leviathan.challenge.growflow.com/employee?ApiUser=${apiUser}&ApiKey=${apiKey}`)
    .then(response => {res.send(response.data)})
    .catch(err => res.send(err));
});
app.post("/employee", (req, res) => {
    axios.post(`https://leviathan.challenge.growflow.com/employee?ApiUser=${apiUser}&ApiKey=${apiKey}`, req.body)
    .then(() => {res.status(200).send(req.body)})
    .catch(err => res.send(err));
});
