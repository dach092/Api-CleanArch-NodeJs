import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import authRoutes from './routes/auth.routes'
import passport from 'passport'
import passportMiddleware from './middlewares/passport'
import specialRoutes from './routes/special.routes'

//initializations
const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

//settings
app.set('port', process.env.PORT || 3000);

//swagger
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Swagger Express API',
            description: 'Swagger Express API Information',
            version: '1.0.0',
            contact: {
                name: 'David Cruz Huertas'
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ['app.ts']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

//routes
app.get('/', (req, res) => {
    res.send(`THE API is at http://localhost:${app.get('port')}`)
});

app.use(authRoutes);
app.use(specialRoutes);

export default app;