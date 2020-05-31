import "reflect-metadata";
import { startServer } from './app';
require('dotenv').config();
const PORT = process.env.PORT



const main = async () => {
    const app = await startServer();
    app.listen(PORT);
    console.log(`🚀 Server ready at http://localhost:${PORT}`)
}

main();