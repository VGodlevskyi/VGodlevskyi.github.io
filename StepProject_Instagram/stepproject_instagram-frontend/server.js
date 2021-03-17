const server = require('express')
const path = require('path')
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = server()

const __PORT = process.env.PORT || 3000

app.use(server.static(path.join(__dirname, 'build')))

app.use('/api', createProxyMiddleware({
        // target: "http://localhost:3500/",
        target: "https://stepproject-instagram-backend.herokuapp.com/",
        changeOrigin: true,
    })
);

app.use('/auth', createProxyMiddleware({
        // target: "http://localhost:3500/",
        target: "https://stepproject-instagram-backend.herokuapp.com/",
        changeOrigin: true,
    })
);


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(__PORT, () => {
    console.log(`Start app on port ${__PORT}`)
})