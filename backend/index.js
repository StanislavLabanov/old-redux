const contacts = require('./data/contacts.json')
const group = require('./data/groups.json')
const express = require('express');

const PORT = process.env.PORT || 3010;
const app = express();

const typeJson = {
   contacts,
   group,
}

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   next();
});

app.get(`/api/contacts`, (req, res) => {
   res.json(typeJson.contacts)
});

app.get(`/api/groups`, (req, res) => {
   res.json(typeJson.group)
});

app.listen(PORT, () => {
   console.log(`Server listening on ${PORT}`);
})