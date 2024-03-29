// require the express module
import express from 'express';

import usersRouter from "./routes/usersRouter"
import productsRouter from "./routes/productsRouter"

// require the cors module
import cors from "cors"


// creates an instance of an Express server
const app = express();


// enable Cross Origin Resource Sharing so this API can be used from web-apps on other domains
app.use(cors())


// allow POST and PUT requests to use JSON bodies
app.use(express.json())
app.use("/users", usersRouter)
app.use("/products", productsRouter)

// define the port
const port = 3000;


// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
