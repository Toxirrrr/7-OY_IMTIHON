import fileUpload from 'express-fileupload'
import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import categoryRouter from './routes/category.router.js'
import { PORT, accessLogStream } from './config.js'
import postsRouter from './routes/posts.router.js'
import adminRouter from './routes/admin.router.js'
import swaggerRouter from './swagger.js'
import signIn from './routes/signIn.js'
import imgRouter from './routes/img.router.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(function(req, res, Toxirrrr) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  Toxirrrr();
});
app.use(
  morgan('combined', {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
    stream: accessLogStream,
  })
);

app.use(swaggerRouter)
app.use(signIn)
app.use(categoryRouter)
app.use(adminRouter)
app.use(postsRouter)
app.use(imgRouter)

app.listen(PORT, () => console.log('http://localhost:' + PORT))