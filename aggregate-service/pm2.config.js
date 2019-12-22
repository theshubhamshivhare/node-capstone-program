module.exports = [
    {
        script: './app.js',
        name: 'aggregate-service',
        exec_mode: 'cluster',
        instances: 4,
        watch: true,
        env: {
            "NODE_ENV": "development",
            PORT: 8882
        }
    }
]