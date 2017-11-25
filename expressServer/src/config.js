module.exports = {
    host: 'localhost',
    port: 3000,
    secret: 'IamOnlyHumanAfterAll',
    issuer: 'Mateus',
    cookieName:'boilerplate',
    tokenExpiration: 60*24,
    mongo: {
        uri: 'mongodb://localhost:27017/test',
        options: {
            db: {
                safe: true
            }
        }
    }
};