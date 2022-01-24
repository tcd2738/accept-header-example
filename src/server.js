const http = require('http');
const url = require('url');
const responseHandler = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    index: responseHandler.getIndex,
    '/': responseHandler.getIndex,
    '/cats': responseHandler.getCats,
};

const onRequest = (request, response) => {
    const parsedUrl = url.parse(request.url);
    const acceptedTypes = request.headers.accept.split(',');

    if (urlStruct[parsedUrl.pathname]) {
        urlStruct[parsedUrl.pathname](request, response, acceptedTypes);
    } else {
        urlStruct.index(request, response);
    }
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1: ${port}`);
});
