import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'

const createApp = () => {
    const app = express()

    // Middleware
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    app.use(cookieParser())
    app.use(morgan('tiny'))

    // Routers
    app.get('/', (req, res) => {
        let timeout = req.query.timeout ? parseInt(req.query.timeout) : 0
        setTimeout(() => {
            res.send({ok: true})
        }, timeout * 1000)
    })

    return app
}

export default createApp
