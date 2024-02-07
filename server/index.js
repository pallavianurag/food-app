const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require('./db');

const app = express();
const productRouter = require('./routes/ProductRouter');
const userRouter = require('./routes/userRouter');

const Order = require('./models/orderModel');

const env = require('dotenv').config({path: '../.env'});


var corsOptions = {
    origin: "http://localhost:3000"
}

const calculateOrderAmount = (orderItems) => {
    const initialValue = 0;
    const itemsPrice = orderItems.reduce(
        (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.amount, initialValue
    );
    return itemsPrice * 100;
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));
app.use(
  express.json({
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    },
  })
);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Food Ordering"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use('/api/', productRouter);
app.use('/api/', userRouter);

app.post('/create-payment-intent', async(req, res) => {
    try {
        const { orderItems, shippingAddress, userId } = req.body;
        console.log(shippingAddress);

        const totalPrice = calculateOrderAmount(orderItems);

        const taxPrice = 0;
        const shippingPrice = 0;

        const order = new Order({
            orderItems,
            shippingAddress,
            
            totalPrice,
            taxPrice,
            shippingPrice,
            user: ''
        })

        await order.save();

    } catch(e) {
        res.status(400).json({
            error: {
                message: e.message
            }
        })
    }
})