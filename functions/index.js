const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")
('sk_test_51Js8QCC5VOY8ClmJwS8FJDK8Ho1vcUciXkh4HJODHLq3gEwq6WtvIQ9kGpTQz5j5Go7qyRJYJkQfSff07ZgJNBtz00BsAiSYTO')

// API

// App config
const app = express()
// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())
// API Routes
app.get('/', (req, res) => { res.status(200).send('Hello world') })
app.post('/payments/create', async (req, res) => {
    const total = req.query.total

    console.log('Payment request received', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })
    // OK. Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
// Listen Command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-e461b/us-central1/api