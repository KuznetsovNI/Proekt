import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Fingerprint from "express-fingerprint";
import AuthRootRouter from "./routers/Auth.js";
import TokenService from "./services/Token.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import pool from "./db.js";






dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

app.use(
  Fingerprint({
    parameters: [Fingerprint.useragent, Fingerprint.acceptHeaders],
  })
);

app.use("/auth", AuthRootRouter);

app.get("/resource/protected", TokenService.checkAccess, (_, res) => {
  res.status(200).json("Добро пожаловать!" + Date.now());
});






app.use(express.json());
app.use(cors());
app.use('/uploads',express.static('uploads'));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}.${file.originalname}`)
    }
  });  
const upload = multer({ storage: storage })

app.get('/', (req, res) => {
  res.json({"message":'Hello World 123!'})
});

app.get('/blog/:cat',async (req, res) => {
    const result = await pool.query(
      req.params.cat != 'all' ? `SELECT * from blogs where category = '${req.params.cat}'` : 'SELECT * from blogs'
    );
    res.json({"data":result.rows})
});

app.get('/blogbyid/:id',async (req, res) => {
  const result = await pool.query(`SELECT * from blogs where id = ${req.params.id}`);
  res.json({"data":result.rows})
});

app.post('/blog',async (req, res) => {
    const result = await pool.query('INSERT INTO blogs (title,image,post,category) VALUES ($1,$2,$3,$4)',[
        req.body.title,req.body.image,req.body.post,req.body.category
    ]);
    res.json({"message":"Added new blog","desc":result.rowCount});
});

app.post('/blogimage', upload.single('file'), function (req, res, next) {
    res.json(req.file);
});






app.listen(PORT, () => {
  console.log("Сервер успешно запущен");
});
