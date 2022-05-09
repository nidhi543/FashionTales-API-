const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const productRoute = require('./routes/product');
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.Mongo_URL).then(() =>{
    console.log("Successful DB connection");
}).catch((err) =>{
    console.log(err);
})

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth" , authRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 5000");
});