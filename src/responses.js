const fs = require('fs');  // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const respond = (request, response, content, type) => {
  response.writeHead(200, { 'Content-Type': type });
  response.write(content);
  response.end();
};

const getIndex = (request, response) => {
  respond(request, response, index, 'text/html');
};

const getCats = (request, response, acceptedTypes) => {
  const cat = {
    name: 'Jim',
    age: 1000,
  };

  // JSON = JavaScript Object Notation
  const catString = JSON.stringify(cat);
  return respond(request, response, catString, 'application/json');
};

module.exports = {
  getCats,
  getIndex,
};
