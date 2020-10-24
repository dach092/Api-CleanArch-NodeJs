export default {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydbone',
        USER: process.env.MONGODB_USER || 'admin',
        PASSWORD: process.env.MONGODB_PASSWORD || '123456',
        authSource: 'mydbone'
    }
}


//mongodb://admin:******@0.0.0.0:27017/mydbone?authSource=mydbone