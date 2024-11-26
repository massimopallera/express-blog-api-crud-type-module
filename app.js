import express from 'express';
import cors from 'cors';

import PostRouter from './routes/posts.js'
import logger from './middleware/logger.js';

const HOST = process.env.host
const PORT = process.env.port

const app = express();
app.use(express.json())
app.use(cors())

app.use(express.static('/public'))

app.use(logger)

app.use('/posts', PostRouter)

app.listen(PORT, () => { console.log(`listening on ${HOST}:${PORT}`) })

