import express from "express";
const app = express()
const PORT =3000

app.get('/', function (req, res) {
  res.send('Hello World....!')
})

app.listen(3000,()=>{
  console.log(`Server is running on port ${PORT}`);
})