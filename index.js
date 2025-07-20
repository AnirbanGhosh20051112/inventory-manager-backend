express = require('express');
const app = express()
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const mongoDB = require('./database/db')
const cors = require('cors');
mongoDB();


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 



app.use('/user', userRoutes)
app.use('/auth', authRoutes)
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
