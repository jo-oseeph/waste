// src/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));