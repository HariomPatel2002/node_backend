import expres from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = expres();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential:true
}));
app.use(expres.json({limit: '50mb'}))
app.use(expres.urlencoded({extended:true, limit: '50mb'}));
app.use(expres.static('Public'));

app.use(cookieParser());

export default app;