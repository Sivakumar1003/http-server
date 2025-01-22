const http = require('http');
const { v4: uuid } = require('uuid');
const statusCode = require('http').STATUS_CODES;

const server = http.createServer((req, res) => {

    if (req.url === '/html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <!DOCTYPE html>
            <html>
                <head>
                </head>
                <body>
                    <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
                    <p> - Martin Fowler</p>
                </body>
            </html>
        `);
        res.end();
    } else if (req.url === '/json') {
        const data = {
            "slideshow": {
                "author": "Yours Truly",
                "date": "date of publication",
                "slides": [
                    {
                        "title": "Wake up to WonderWidgets!",
                        "type": "all"
                    },
                    {
                        "items": [
                            "Why <em>WonderWidgets</em> are great",
                            "Who <em>buys</em> WonderWidgets"
                        ],
                        "title": "Overview",
                        "type": "all"
                    }
                ],
                "title": "Sample Slide Show"
            }
        }
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.write(JSON.stringify(data));
        res.end();
    } else if (req.url === '/uuid') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(JSON.stringify({ v4: uuid() }));
        res.end();
    } else if (req.url.startsWith('/status/')) {
        let code = req.url.split('/');
        if (statusCode.hasOwnProperty(code[2])) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(statusCode[code[2]]);
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.write("Invalid Status Code...");
        }
        res.end();
    } else if (req.url.startsWith('/delay/')) {
        let time = req.url.split('/');
        time = time[2];
        if (Number(time)) {
            setTimeout(() => {
                res.write(`Responsed after ${time} seconds.`);
                res.end();
            }, time * 1000);
        } else {
            res.writeHead(400, {'Content-Type': 'text/plain'});
            res.write(`${time} is not a number.`)
            res.end();
        }
    } else {
        res.write('Hello everyone...');
        res.end();
    }
});

server.listen(3000, () => {
    console.log("server runing...");
});