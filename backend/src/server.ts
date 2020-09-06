import App from './app'
import routes from './routes'

const server = new App({
    port: 3333,
    route: routes
});

server.listen()