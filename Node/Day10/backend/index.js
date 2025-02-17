const express = require('express');
const {booksRouter} = require("./Routes/book")
const {userRouter} = require("./Routes/user")
const app = express();

app.use(express.json())

// app.use("/test", (req, res) => {
//     res.send("OKAY from middleware")
// })

// app.get("/test", (req, res) => {
//     res.send("OKAY from get")
// })



app.use("/books",booksRouter)
app.use("/users",userRouter)







app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});

