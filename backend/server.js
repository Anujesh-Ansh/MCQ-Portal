import express from 'express'
import axios from 'axios'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT || 5002

const app = express()

app.use(cors())


app.get('/:amount/:difficulty', async(req, res) => {
    const response = await axios.get(`${process.env.API_URL}?amount=${req.params.amount}&difficulty=${req.params.difficulty}`)
    // console.log(response.data.results)
    res.json(response.data.results)
})

app.listen(PORT, ()=> console.log(`Server is running on PORT ${PORT}`))