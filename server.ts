import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import './src/shared/infra/typeorm';
import './src/shared/container';
import { router } from './src/shared/infra/http/routes';
import { AppError } from './src/shared/errors/AppError';


const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server is running!"));