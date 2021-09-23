const fastify = require('fastify')({logger: true});

const PORT = 5000;
fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        title: 'fastify-api',
        description: 'Testing the Fastify swagger API',
        version: '0.1.0'
    }
})
fastify.register(require('./routes/items'));

const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1);
    }
}

start();