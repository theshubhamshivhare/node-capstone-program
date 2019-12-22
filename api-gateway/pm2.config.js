module.exports = [
    {
        script: './server.js',
        name: 'api-gateway',
        exec_mode: 'cluster',
        instances: 4,
        watch: true,
        env: {
            "NODE_ENV": "development",
            PORT: 8882
        }
    }
]