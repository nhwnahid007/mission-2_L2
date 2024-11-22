import { Server } from 'http';
import app from './app'

const PORT = 5000;

let server : Server;

async function startServer() {
    server = app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`)
      })
}

startServer();