import { config } from 'dotenv'
import express from 'express'

const app = express()
config()

const PORT = Number(process.env.PORT) || 3333
const HOST = '0.0.0.0'

app.get('/', (req, res, next) => {
    res.status(200).send('Hello')
})

app.listen(PORT, HOST, () => {
    console.log(`Server listening on port ${PORT}`);
});
  